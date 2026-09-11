import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, type Lead } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'loading' | 'success' | 'error';

type FormState = {
  name: string;
  company: string;
  need_type: 'baru' | 'servis' | 'upgrade';
  capacity: string;
  location: string;
  phone: string;
  email: string;
  message: string;
};

const initial: FormState = {
  name: '',
  company: '',
  need_type: 'baru',
  capacity: '',
  location: '',
  phone: '',
  email: '',
  message: '',
};

const fieldClass =
  'w-full border border-line bg-surface px-4 py-3 text-ink-body placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy';
const labelClass = 'mb-2 block text-sm font-medium text-navy';

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company) {
      setStatus('error');
      setErrorMsg('Nama dan perusahaan wajib diisi.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    const payload: Lead = {
      name: form.name,
      company: form.company,
      need_type: form.need_type,
      capacity: form.capacity || undefined,
      location: form.location || undefined,
      phone: form.phone || undefined,
      email: form.email || undefined,
      message: form.message || undefined,
    };

    const { error } = await supabase.from('leads').insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Terjadi kesalahan saat mengirim. Silakan coba lagi atau hubungi kami langsung.');
      return;
    }

    setStatus('success');
    setForm(initial);
  };

  if (status === 'success') {
    return (
      <div className="border border-line bg-surface p-8 text-center">
        <CheckCircle2 size={40} className="mx-auto text-amber" />
        <h3 className="mt-4 text-xl font-medium text-navy">Permintaan terkirim</h3>
        <p className="mt-2 text-ink-muted">
          Terima kasih. Tim teknik kami akan menghubungi Anda dalam 1×24 jam kerja untuk
          penjadwalan survei atau penawaran.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-navy-medium underline underline-offset-4"
        >
          Kirim permintaan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Nama <span className="text-amber">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={update('name')}
            className={fieldClass}
            placeholder="Nama PIC"
            required
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            Perusahaan <span className="text-amber">*</span>
          </label>
          <input
            id="cf-company"
            type="text"
            value={form.company}
            onChange={update('company')}
            className={fieldClass}
            placeholder="Nama perusahaan"
            required
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="cf-need" className={labelClass}>
            Jenis kebutuhan
          </label>
          <select id="cf-need" value={form.need_type} onChange={update('need_type')} className={fieldClass}>
            <option value="baru">Pembuatan boiler baru</option>
            <option value="servis">Perawatan &amp; servis</option>
            <option value="upgrade">Upgrade &amp; retrofit</option>
          </select>
        </div>
        <div>
          <label htmlFor="cf-capacity" className={labelClass}>
            Kapasitas boiler
          </label>
          <input
            id="cf-capacity"
            type="text"
            value={form.capacity}
            onChange={update('capacity')}
            className={fieldClass}
            placeholder="mis. 6 ton/jam, 12 bar"
          />
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="cf-location" className={labelClass}>
            Lokasi
          </label>
          <input
            id="cf-location"
            type="text"
            value={form.location}
            onChange={update('location')}
            className={fieldClass}
            placeholder="Kota / lokasi pabrik"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            Telepon / WhatsApp
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            className={fieldClass}
            placeholder="0812xxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={form.email}
          onChange={update('email')}
          className={fieldClass}
          placeholder="email@perusahaan.co.id"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Catatan tambahan
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={update('message')}
          className={fieldClass}
          placeholder="Jelaskan kebutuhan, kondisi unit, atau jadwal yang diharapkan."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 flex-none" />
          <span>{errorMsg}</span>
        </div>
      )}

      <Button type="submit" variant="amber" size="lg" className="w-full">
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Mengirim...
          </>
        ) : (
          'Kirim Permintaan Survei'
        )}
      </Button>
      <p className="text-center text-xs text-ink-muted">
        Dengan mengirim, Anda menyetujui kami menghubungi Anda terkait permintaan ini.
      </p>
    </form>
  );
}
