/*
# Create leads table for boiler company contact/survey requests

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) - nama PIC / penghubung
  - `company` (text, not null) - perusahaan pemesan
  - `need_type` (text, not null) - jenis kebutuhan: 'baru' | 'servis' | 'upgrade'
  - `capacity` (text, nullable) - kapasitas boiler yang dibutuhkan/dimiliki
  - `location` (text, nullable) - lokasi proyek / pabrik
  - `message` (text, nullable) - catatan tambahan dari pengirim
  - `phone` (text, nullable) - nomor telepon / WhatsApp pengirim
  - `email` (text, nullable) - email pengirim
  - `status` (text, not null default 'baru') - status penanganan lead
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- INSERT terbuka untuk anon + authenticated: pengunjung situs (tanpa login)
  dapat mengirim permintaan survei/penawaran melalui form kontak.
- SELECT / UPDATE / DELETE hanya untuk authenticated: lead adalah data sensitif
  ( kontak klien) dan TIDAK boleh dibaca publik. Pemilik usaha membaca lead
  melalui Supabase Studio (service role melewati RLS) atau dashboard admin
  ber-autentikasi di masa depan. Frontend publik tidak pernah membaca tabel ini,
  jadi tidak ada policy SELECT untuk anon.

3. Notes
- Tidak ada autentikasi di situs publik (no-auth, single-tenant untuk lead capture).
- Tabel ini hanya menerima INSERT dari form kontak publik.
- `status` disediakan untuk alur penanganan internal (baru -> dihubungi -> surga -> deal).
*/

CREATE TABLE IF NOT EXISTS leads (
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

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_lead" ON leads;
CREATE POLICY "anon_insert_lead"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads"
ON leads FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads"
ON leads FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads"
ON leads FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);