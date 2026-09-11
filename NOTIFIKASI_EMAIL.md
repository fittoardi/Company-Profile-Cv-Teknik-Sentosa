# Notifikasi Email untuk Lead Kontak

Fitur: saat pengguna kirim formulir kontak (anonim), data masuk ke tabel `leads` dan **email notifikasi otomatis** dikirim ke `goodhooman061202@gmail.com`.

## Arsitektur
```
Form frontend (anonim)
  → supabase.from('leads').insert()  [RLS: anon insert]
    → Trigger AFTER INSERT (PostgreSQL)
      → pg_net HTTP POST ke Edge Function lead-notification
        → Resend API kirim email ke goodhooman061202@gmail.com
```

## Langkah Setup

### 1. Jalankan migration SQL
Buka Supabase Dashboard → SQL Editor → paste isi `supabase/migrations/20260911000000_lead_notification_webhook.sql` → Run.

Migration ini:
- Enable `pg_net` extension
- Buat policy `anon_insert_lead` (INSERT untuk anon+authenticated) — **ini juga fix 401 RLS**
- Buat fungsi `notify_lead_insert()` + trigger AFTER INSERT
- Enable realtime untuk tabel `leads`

### 2. Deploy Edge Function
```bash
npx supabase functions deploy lead-notification --no-verify-jwt
```

### 3. Atur environment variables (Edge Functions → lead-notification → Settings → Secret)
- `RESEND_API_KEY` = kunci API Resend (dari https://resend.com/api-keys, free tier 3 email/hari)
- `TO_EMAIL` = `goodhooman061202@gmail.com` (sudah default di code)
- `FROM_EMAIL` = email pengirim (mis. `noreply@sentrateknik.co.id`, sudah default)

### 4. Atur Vault (service role key untuk webhook)
Buka SQL Editor, jalankan:
```sql
INSERT INTO vault.secrets (id, secret, description)
VALUES (gen_random_uuid(), 'SUPABASE_SECRET_KEY=your_supabase_secret_key', 'Supabase service role key for webhook')
ON CONFLICT DO NOTHING;
```

### 5. Uji
1. Buka halaman kontak (`/kontak`)
2. Isi form
3. Klik "Kirim Permintaan Survei"
4. Cek email `goodhooman061202@gmail.com` — notifikasi berisi data lead

## Format Email yang Dikirim
Email berformat HTML responsif dengan:
- Header navy/amber (brand Sentosa Teknik Engineering)
- Badge "Lead Baru — Permintaan Survei Boiler"
- Tabel data: Nama PIC, Perusahaan, Jenis Kebutuhan, Kapasitas, Lokasi, Telepon, Email
- Box catatan tambahan
- Tombol "Buka Supabase Dashboard"
- Footer copyright

## Catatan
- Trigger berjalan async (pg_net), jadi INSERT return langsung tanpa menunggu email.
- Jika `RESEND_API_KEY` tidak diatur, Edge Function return 500 (tidak memblokir INSERT).
- Data lead tersimpan di tabel `leads` regardless notifikasi.