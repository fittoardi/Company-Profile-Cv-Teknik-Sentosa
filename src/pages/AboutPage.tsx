import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CertificationBadge } from '@/components/ui/CertificationBadge';
import { PhotoArea } from '@/components/ui/PhotoArea';
import { company, stats, certifications, images } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

export function AboutPage({ onNavigate }: Props) {
  return (
    <PageShell title={`Tentang — ${company.name}`}>
      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 lg:py-24">
          <SectionLabel label="TENTANG">Perusahaan</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Fabrikator steam boiler industri yang mengutamakan keselamatan dan presisi
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            {company.legalName} berdiri sejak {company.establishedYear}. Kami menangani
            pembuatan, perawatan, dan upgrade steam boiler untuk pabrik di sektor manufaktur,
            F&amp;B, tekstil, kelapa sawit, dan energi.
          </p>
        </div>
      </section>

      {/* Cerita + foto */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid gap-6">
            <PhotoArea src={images.welderSparks} alt="Pengelasan fabrikasi boiler" ratio="4/3" />
            <PhotoArea src={images.engineerTablet} alt="Insinyur membahas proyek" ratio="4/3" />
          </div>
          <div>
            <SectionLabel label="CERITA">Singkat</SectionLabel>
            <h2 className="mt-5 text-3xl font-medium text-navy">
              Dari workshop kecil menjadi mitra boiler lintas sektor
            </h2>
            <div className="mt-5 space-y-4 text-ink-muted">
              <p>
                Berawal dari layanan perawatan boiler pabrik tekstil, kami tumbuh menjadi
                fabrikator unit baru dan penyedia upgrade untuk berbagai sektor industri.
                Setiap proyek dikerjakan dengan dokumentasi material, uji hidrostatik, dan
                kepatuhan standar bejana tekan.
              </p>
              <p>
                Kami percaya kepercayaan teknis dibangun dari angka dan fakta, bukan klaim
                marketing. Itu sebabnya setiap penawaran disertai perhitungan kapasitas,
                estimasi timeline, dan rincian material yang jelas.
              </p>
            </div>

            {/* Visi misi */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border-t-2 border-navy pt-5">
                <h3 className="text-lg font-medium text-navy">Visi</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Menjadi mitra terpercaya untuk kebutuhan steam boiler industri di Indonesia
                  dengan standar keselamatan bejana tekan tertinggi.
                </p>
              </div>
              <div className="border-t-2 border-amber pt-5">
                <h3 className="text-lg font-medium text-navy">Misi</h3>
                <ul className="mt-2 space-y-2 text-sm text-ink-muted">
                  <li>Fabrikasi unit sesuai kebutuhan spesifik pabrik.</li>
                  <li>Menjaga reliabilitas operasi melalui perawatan terjadwal.</li>
                  <li>Meningkatkan efisiensi energi via upgrade &amp; retrofit.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik besar */}
      <section className="border-y border-line bg-navy text-white">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10">
          <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center lg:px-8 lg:py-10">
                <p className="editorial-number text-4xl font-medium text-amber lg:text-6xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kenapa memilih kami */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionLabel label="KENAPA">Memilih kami</SectionLabel>
        <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
          Alasan teknis dan operasional
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Dokumentasi lengkap',
              d: 'Setiap unit dilengkapi datasheet, laporan material, dan sertifikat uji hidrostatik.',
            },
            {
              t: 'Layanan darurat 24 jam',
              d: 'Tim teknisi siap diturunkan untuk kerusakan kritis agar downtime minimal.',
            },
            {
              t: 'Custom sesuai kebutuhan',
              d: 'Desain kapasitas, tekanan, dan bahan bakar disesuaikan dengan proses pabrik Anda.',
            },
            {
              t: 'Efisiensi energi',
              d: 'Upgrade burner dan kontrol mengurangi konsumsi bahan bakar dengan angka terukur.',
            },
            {
              t: 'Bersertifikat',
              d: 'Kepatuhan ISO 9001, SNI, dan K3 Kemnaker untuk bejana tekan.',
            },
            {
              t: 'Pengalaman lintas sektor',
              d: 'Melayani manufaktur, F&B, tekstil, kelapa sawit, dan energi.',
            },
          ].map((item) => (
            <div key={item.t} className="bg-surface p-8">
              <h3 className="text-lg font-medium text-navy">{item.t}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionLabel label="STANDAR">Sertifikasi</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
            Kepatuhan standar nasional
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {certifications.map((c) => (
              <CertificationBadge key={c.code} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-10 lg:py-20">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl">Siap mendiskusikan kebutuhan boiler Anda?</h2>
            <p className="mt-2 text-white/75">Kami siap melakukan survei lapangan dan menyusun penawaran.</p>
          </div>
          <Button
            variant="amber"
            size="lg"
            onClick={() => onNavigate('/kontak')}
            icon={<ArrowRight size={18} />}
          >
            Hubungi kami
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
