const SUPABASE_URL = 'https://vdbysblozdajrcerirxe.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_mlHKuC0vwcfvMVCcUZ_8qQ_MCsvbwCM';

(async () => {
  // 1. Cek tabel ada
  console.log('=== TEST 1: SELECT leads ===');
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads?limit=1`, {
      headers: { apikey: PUBLISHABLE_KEY, Authorization: `Bearer ${PUBLISHABLE_KEY}` },
    });
    console.log('STATUS:', res.status);
    console.log('BODY:', await res.text());
  } catch (e) {
    console.error('ERROR:', e.message);
  }

  // 2. INSERT anon (publishable key, no user auth)
  console.log('\n=== TEST 2: INSERT anon ===');
  const payload = {
    name: 'Test User',
    company: 'Test Co',
    need_type: 'baru',
    capacity: '6 ton/jam',
    location: 'Test',
    phone: '08123456789',
    email: 'test@test.com',
    message: 'test anon insert',
  };
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: PUBLISHABLE_KEY,
        Authorization: `Bearer ${PUBLISHABLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(payload),
    });
    console.log('STATUS:', res.status);
    console.log('BODY:', await res.text());
  } catch (e) {
    console.error('ERROR:', e.message);
  }
})();