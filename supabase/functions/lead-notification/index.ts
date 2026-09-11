/// Supabase Edge Function: lead-notification
/// Triggered by database webhook AFTER INSERT on `leads` table.
/// Sends email via Resend API to the company inbox.

Deno.serve(async (req) => {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const record = payload?.record;

    if (!record) {
      return new Response(
        JSON.stringify({ error: 'No record in payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const TO_EMAIL = Deno.env.get('TO_EMAIL') || 'goodhooman061202@gmail.com';
    const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'noreply@sentrateknik.co.id';

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      );
    }

const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lead Baru — Sentosa Teknik Engineering</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F0;font-family:Inter,system-ui,-apple-system,sans-serif;">
  <div style="max-width:640px;margin:0 auto;padding:40px 20px;">
    
    <div style="background:#042C53;padding:32px;border-radius:8px 8px 0 0;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;background:#EF9F27;border-radius:6px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#412402;font-size:20px;font-weight:700;">SB</span>
        </div>
        <div>
          <h1 style="margin:0;color:#FFFFFF;font-size:18px;font-weight:600;">Sentosa Teknik Engineering</h1>
          <p style="margin:2px 0 0;color:rgba(255,255,255,0.7);font-size:12px;">Steam Boiler Industri</p>
        </div>
      </div>
    </div>

    <div style="background:#FEF3C7;padding:12px 20px;border-left:4px solid #EF9F27;">
      <span style="color:#412402;font-size:13px;font-weight:600;"> Lead Baru — Permintaan Survei Boiler</span>
    </div>

    <div style="background:#FFFFFF;padding:32px;border-radius:0 0 8px 8px;border:1px solid #E5E5E0;border-top:0;">
      
      <p style="margin:0 0 24px;color:#5F5E5A;font-size:13px;">
        <strong>Waktu terima:</strong> ${new Date(record.created_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
      </p>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;width:150px;color:#5F5E5A;">Nama PIC</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;font-weight:600;">${record.name}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Perusahaan</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;font-weight:600;">${record.company}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Jenis Kebutuhan</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;">${record.need_type}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Kapasitas Boiler</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;">${record.capacity || '-'}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Lokasi</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;">${record.location || '-'}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Telepon / WhatsApp</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;">${record.phone || '-'}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#5F5E5A;">Email</td>
          <td style="padding:10px 0;border-bottom:1px solid #E5E5E0;color:#1A1A17;">${record.email || '-'}</td>
        </tr>
      </table>

      <div style="margin-top:24px;padding:16px;background:#F5F5F0;border-radius:6px;border-left:3px solid #042C53;">
        <p style="margin:0 0 8px;color:#042C53;font-size:13px;font-weight:600;">Catatan Tambahan</p>
        <p style="margin:0;color:#5F5E5A;font-size:14px;line-height:1.6;white-space:pre-wrap;">${record.message || 'Tidak ada catatan.'}</p>
      </div>

      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #E5E5E0;">
        <a href="https://dashboard.supabase.com/project/vdbysblozdajrcerirxe" 
           style="display:inline-block;background:#EF9F27;color:#412402;padding:12px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">
          Buka Supabase Dashboard →
        </a>
      </div>

    </div>

    <div style="text-align:center;margin-top:24px;color:#5F5E5A;font-size:12px;">
      <p>Email otomatis dari sistem notifikasi Sentosa Teknik Engineering.</p>
      <p>© 2026 CV Sentosa Teknik Engineering. Hak cipta dilindungi.</p>
    </div>

  </div>
</body>
</html>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `[Lead Baru] ${record.company} — ${record.name}`,
        html,
      }),
    });

    const result = await res.text();

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: 'Resend API failed', detail: result }),
        { status: res.status, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true, result }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } },
    );
  }
});