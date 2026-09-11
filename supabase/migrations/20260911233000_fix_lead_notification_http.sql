-- Fix the lead trigger for pg_net versions that expose net.http_post.

CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "public";

CREATE OR REPLACE FUNCTION public.notify_lead_insert()
RETURNS TRIGGER AS $$
DECLARE
  edge_function_url text := 'https://vdbysblozdajrcerirxe.supabase.co/functions/v1/lead-notification';
  payload jsonb;
BEGIN
  payload := jsonb_build_object(
    'record', jsonb_build_object(
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

  PERFORM net.http_post(
    url := edge_function_url,
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body := payload
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_insert_notify ON public.leads;

CREATE TRIGGER leads_insert_notify
AFTER INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.notify_lead_insert();
