-- Migration: lead notification email via Edge Function + pg_net
-- Run this in Supabase SQL Editor

-- 1. Enable pg_net extension
CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "public";

-- 2. Ensure leads table has RLS and anon insert policy
ALTER TABLE "public"."leads" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_lead" ON "public"."leads";
CREATE POLICY "anon_insert_lead"
  ON "public"."leads"
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 3. Enable realtime for leads table (optional, for admin dashboard)
ALTER TABLE "public"."leads" REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.leads;

-- 4. Webhook function: calls Edge Function after INSERT
CREATE OR REPLACE FUNCTION public.notify_lead_insert()
RETURNS TRIGGER AS $$
DECLARE
  supabase_url text := 'https://vdbysblozdajrcerirxe.supabase.co';
  edge_function_url text := supabase_url || '/functions/v1/lead-notification';
  service_role_key text := current_setting('vault.supabase_service_role_key', true);
  payload json;
BEGIN
  payload := json_build_object(
    'record', json_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'company', NEW.company,
      'need_type', NEW.need_type,
      'capacity', NEW.capacity,
      'location', NEW.location,
      'message', NEW.message,
      'phone', NEW.phone,
      'email', NEW.email,
      'status', NEW.status,
      'created_at', NEW.created_at
    )
  );

  PERFORM net.http_request(
    url := edge_function_url,
    method := 'POST',
    headers := json_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body := payload
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Create trigger
DROP TRIGGER IF EXISTS leads_insert_notify ON "public"."leads";
CREATE TRIGGER leads_insert_notify
  AFTER INSERT ON "public"."leads"
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_lead_insert();