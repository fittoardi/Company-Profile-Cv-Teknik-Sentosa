const postgres = require('postgres');

(async () => {
  const urls = [
    'postgresql://postgres:admin@db.vdbysblozdajrcerirxe.supabase.co:5432/postgres',
    'postgresql://postgres.vdbysblozdajrcerirxe:admin@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres',
  ];

  for (const connStr of urls) {
    console.log(`\n=== Trying: ${connStr.replace(/admin/g, '***')} ===`);
    const sql = postgres(connStr, { connection_timeout: 10 });
    try {
      // Apply migration
      await sql`CREATE TABLE IF NOT EXISTS leads (
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
        created_at timestampt DEFAULT now()
      )`;
      await sql`ALTER TABLE leads ENABLE ROW LEVEL SECURITY`;
      await sql`DROP POLICY IF EXISTS "anon_insert_lead" ON leads`;
      await sql`CREATE POLICY "anon_insert_lead" ON leads FOR INSERT TO anon, authenticated WITH CHECK (true)`;
      await sql`DROP POLICY IF EXISTS "auth_select_leads" ON leads`;
      await sql`CREATE POLICY "auth_select_leads" ON leads FOR SELECT TO authenticated USING (true)`;
      await sql`DROP POLICY IF EXISTS "auth_update_leads" ON leads`;
      await sql`CREATE POLICY "auth_update_leads" ON leads FOR UPDATE TO authenticated USING (true) WITH CHECK (true)`;
      await sql`DROP POLICY IF EXISTS "auth_delete_leads" ON leads`;
      await sql`CREATE POLICY "auth_delete_leads" ON leads FOR DELETE TO authenticated USING (true)`;
      await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`;
      await sql`CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status)`;
      console.log('MIGRATION APPLIED!');

      // Verify
      const r = await sql`SELECT count(*) FROM leads`;
      console.log('leads count:', r[0].count);

      await sql.end();
      process.exit(0);
    } catch (e) {
      console.error('ERROR:', e.message);
      try { await sql.end(); } catch {}
    }
  }
  console.log('\nAll connections failed.');
  process.exit(1);
})();