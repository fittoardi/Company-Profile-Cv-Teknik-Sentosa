type LeadRecord = {
  name?: string;
  company?: string;
  need_type?: string;
  capacity?: string | null;
  location?: string | null;
  phone?: string | null;
  email?: string | null;
  message?: string | null;
  created_at?: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const escapeHtml = (value: unknown) =>
  String(value ?? "-")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const payload = await request.json() as { record?: LeadRecord };
    const record = payload.record;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const toEmail = Deno.env.get("TO_EMAIL") ?? "goodhooman061202@gmail.com";
    const fromEmail = Deno.env.get("FROM_EMAIL") ?? "onboarding@resend.dev";

    if (!record) {
      return new Response(JSON.stringify({ error: "Missing record" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Email service is not configured" }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const html = `
      <h2>Lead Baru - Sentosa Teknik Engineering</h2>
      <p><strong>Waktu:</strong> ${escapeHtml(record.created_at)}</p>
      <p><strong>Nama PIC:</strong> ${escapeHtml(record.name)}</p>
      <p><strong>Perusahaan:</strong> ${escapeHtml(record.company)}</p>
      <p><strong>Jenis kebutuhan:</strong> ${escapeHtml(record.need_type)}</p>
      <p><strong>Kapasitas:</strong> ${escapeHtml(record.capacity)}</p>
      <p><strong>Lokasi:</strong> ${escapeHtml(record.location)}</p>
      <p><strong>Telepon:</strong> ${escapeHtml(record.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(record.email)}</p>
      <p><strong>Catatan:</strong> ${escapeHtml(record.message)}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `[Lead Baru] ${record.company ?? "Tanpa perusahaan"} - ${record.name ?? "Tanpa nama"}`,
        html,
      }),
    });

    const responseBody = await resendResponse.text();
    if (!resendResponse.ok) {
      console.error("Resend rejected email", resendResponse.status, responseBody);
      return new Response(JSON.stringify({ error: "Resend rejected the email" }), {
        status: 502,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Notification error", error);
    return new Response(JSON.stringify({ error: "Internal notification error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
