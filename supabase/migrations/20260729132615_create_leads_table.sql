-- Create leads table for boiler company contact/survey requests

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  need_type text NOT NULL CHECK (need_type IN ('baru', 'servis', 'upgrade')),
  capacity text,
  location text,
  message text,
  phone text,
  email text,
  status text NOT NULL DEFAULT 'baru',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous and authenticated users to submit leads
DROP POLICY IF EXISTS "anon_insert_lead" ON public.leads;

CREATE POLICY "anon_insert_lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users to view leads
DROP POLICY IF EXISTS "auth_select_leads" ON public.leads;

CREATE POLICY "auth_select_leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update leads
DROP POLICY IF EXISTS "auth_update_leads" ON public.leads;

CREATE POLICY "auth_update_leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON public.leads;

CREATE POLICY "auth_delete_leads"
ON public.leads
FOR DELETE
TO authenticated
USING (true);

-- Indexes
CREATE INDEX IF NOT EXISTS leads_created_at_idx
ON public.leads (created_at DESC);

CREATE INDEX IF NOT EXISTS leads_status_idx
ON public.leads (status);