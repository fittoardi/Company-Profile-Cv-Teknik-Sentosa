import { ArrowRight, Check } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PhotoArea } from '@/components/ui/PhotoArea';
import { company, services, certifications, images } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

const serviceImages = [images.technicianSteam, images.inspect, images.engineerTablet];

const processSteps = [
  { no: '01', t: 'Survei & konsultasi', d: 'Tim teknik meninjau lokasi, kebutuhan kapasitas, dan kondisi unit existing.' },
  { no: '02', t: 'Desain & perhitungan', d: 'Penyusunan spesifikasi teknis, perhitungan kapasitas, dan estimasi biaya.' },
  { no: '03', t: 'Fabrikasi / eksekusi', d: 'Pengerjaan di workshop dengan inspeksi welding dan pengujian material.' },
  { no: '04', t: 'Uji & commissioning', d: 'Uji hidrostatik, trial run, dan serah terima dengan dokumentasi lengkap.' },
];

export function ServicesPage({ onNavigate }: Props) {
  return (
    <PageShell title={`Layanan — ${company.name}`}>
      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 lg:py-24">
          <SectionLabel label="LAYANAN">Tiga pilar utama</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Menangani seluruh siklus hidup steam boiler industri
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Dari pembuatan unit baru, perawatan berkala, hingga upgrade dan retrofit.
            Setiap layanan dilengkapi dokumentasi teknis dan kepatuhan standar bejana tekan.
          </p>
        </div>
      </section>

      {/* Detail layanan */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          {services.map((s, idx) => (
            <div key={s.no} className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <PhotoArea src={serviceImages[idx]} alt={s.title} ratio="4/3" />
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="editorial-number text-6xl font-medium text-navy/15">{s.no}</span>
                <h2 className="mt-3 text-3xl font-medium text-navy">{s.title}</h2>
                <p className="mt-4 text-ink-muted">{s.short}</p>
                <ul className="mt-6 space-y-3">
                  {s.points?.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-ink-body">
                      <Check size={18} className="mt-0.5 flex-none text-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proses kerja */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionLabel label="PROSES">Cara kerja</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
            Empat tahap dari survei hingga commissioning
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.no} className="bg-surface p-8">
                <span className="editorial-number text-3xl font-medium text-amber">{step.no}</span>
                <h3 className="mt-3 text-lg font-medium text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionLabel label="STANDAR">Sertifikasi</SectionLabel>
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-3xl font-medium text-navy lg:col-span-7 lg:text-4xl">
            Keamanan bejana tekan adalah prioritas
          </h2>
          <p className="text-ink-muted lg:col-span-5">
            Setiap pekerjaan mengikuti standar ISO 9001, SNI, dan K3 Kemnaker untuk
            menjamin keselamatan dan reliabilitas unit.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {certifications.map((c) => (
            <div key={c.code} className="flex items-center gap-3 border border-line px-5 py-4">
              <span className="flex h-10 w-10 items-center justify-center bg-navy text-white">
                <Check size={18} />
              </span>
              <div>
                <p className="font-semibold text-navy">{c.code}</p>
                <p className="text-xs text-ink-muted">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-10 lg:py-20">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl">Butuh layanan boiler?</h2>
            <p className="mt-2 text-white/75">Kirim spesifikasi kebutuhan Anda untuk penawaran.</p>
          </div>
          <Button
            variant="amber"
            size="lg"
            onClick={() => onNavigate('/kontak')}
            icon={<ArrowRight size={18} />}
          >
            Minta penawaran
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
