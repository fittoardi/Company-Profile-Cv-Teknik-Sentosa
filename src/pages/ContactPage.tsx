import { MapPin, Phone, Mail, MessageCircle, Siren } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ContactForm } from '@/components/ContactForm';
import { company } from '@/lib/constants';

export function ContactPage() {
  const waText = encodeURIComponent(
    'Halo, saya ingin konsultasi mengenai kebutuhan steam boiler industri.'
  );
  const waLink = `https://wa.me/${company.whatsapp}?text=${waText}`;

  return (
    <PageShell title={`Kontak — ${company.name}`}>
      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 lg:py-24">
          <SectionLabel label="KONTAK">Hubungi kami</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Minta survei lapangan atau penawaran
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Isi formulir di bawah untuk kebutuhan pembuatan, perawatan, atau upgrade boiler.
            Tim teknik akan menghubungi Anda dalam 1 x 24 jam kerja.
          </p>
        </div>
      </section>

      {/* Grid kontak + form */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info kontak */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-medium text-navy">Informasi kontak</h2>
            <ul className="mt-8 space-y-7">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-navy text-white">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="label-caps text-ink-muted/70">Alamat</p>
                  <p className="mt-1 text-ink-body">{company.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-navy text-white">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="label-caps text-ink-muted/70">Telepon</p>
                  <a href={`tel:${company.phone}`} className="mt-1 block text-ink-body hover:text-navy">
                    {company.phone}
                  </a>
                  <p className="mt-1 text-sm text-ink-muted">
                    Senin–Sabtu, 08.00–17.00 WIB
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-navy text-white">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="label-caps text-ink-muted/70">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block text-ink-body hover:text-navy">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-navy text-white">
                  <Siren size={20} />
                </span>
                <div>
                  <p className="label-caps text-ink-muted/70">Layanan darurat 24 jam</p>
                  <a href={`tel:${company.emergencyPhone}`} className="mt-1 block text-ink-body hover:text-navy">
                    {company.emergencyPhone}
                  </a>
                  <p className="mt-1 text-sm text-ink-muted">Untuk kerusakan boiler kritis</p>
                </div>
              </li>
            </ul>

            {/* Aksi cepat */}
            <div className="mt-10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber px-5 py-2.5 text-sm font-semibold text-amber-dark transition-colors hover:bg-[#d98c14]"
              >
                <MessageCircle size={16} />
                Chat WhatsApp
              </a>
            </div>

            {/* Peta */}
            <div className="mt-10">
              <p className="label-caps text-ink-muted/70">Lokasi</p>
              <div className="mt-3 overflow-hidden border border-line">
                <iframe
                  title="Peta lokasi"
                  src={company.mapEmbed}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="border border-line bg-surface p-6 lg:p-8">
              <h2 className="text-2xl font-medium text-navy">Formulir permintaan</h2>
              <p className="mt-2 text-sm text-ink-muted">
                Lengkapi data berikut. Field bertanda * wajib diisi.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
