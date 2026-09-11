import { ArrowRight, Wrench, Flame, Settings2, PhoneCall } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { CertificationBadge } from '@/components/ui/CertificationBadge';
import { PhotoArea } from '@/components/ui/PhotoArea';
import { ContactForm } from '@/components/ContactForm';
import { company, stats, services, certifications, projects, testimonials, images } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

export function HomePage({ onNavigate }: Props) {
  return (
    <PageShell title={`${company.name} — ${company.tagline}`}>
      {/* ===== HERO ===== */}
      <section className="relative bg-navy text-white">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="label-caps text-amber">SEJAK {company.establishedYear}</span>
              <h1 className="mt-5 text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
                Steam Boiler Industri yang Andal,
                <span className="block text-amber">Dirancang &amp; Difabrikasi Presisi</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Pembuatan, perawatan, dan upgrade steam boiler untuk manufaktur, F&amp;B,
                tekstil, kelapa sawit, dan energi. Setiap unit mengikuti standar SNI dan
                K3 Kemnaker untuk bejana tekan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="amber"
                  size="lg"
                  onClick={() => onNavigate('/kontak')}
                  icon={<PhoneCall size={18} />}
                >
                  Konsultasi gratis
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  onClick={() => onNavigate('/layanan')}
                  icon={<ArrowRight size={18} />}
                >
                  Lihat layanan
                </Button>
              </div>
            </div>

            {/* Foto unit boiler */}
            <div className="lg:col-span-5">
              <PhotoArea
                src={images.boilerUnit}
                alt="Unit steam boiler industri"
                ratio="4/5"
                className="ring-1 ring-white/10"
              />
            </div>
          </div>

          {/* Baris statistik */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border-t border-white/10 bg-white/10 lg:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy px-5 py-7">
                <p className="editorial-number text-4xl font-medium text-amber lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TENTANG PREVIEW ===== */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <PhotoArea src={images.workshop} alt="Workshop fabrikasi boiler" ratio="4/3" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel label="TENTANG" >Perusahaan</SectionLabel>
            <h2 className="mt-5 text-3xl font-medium text-navy lg:text-4xl">
              Fabrikasi dan perawatan boiler yang mengutamakan keselamatan bejana tekan
            </h2>
            <p className="mt-5 text-ink-muted">
              {company.name} berdiri sejak {company.establishedYear} dan telah menyelesaikan
              lebih dari {stats[1].value} proyek untuk {stats[2].value} klien industri. Kami
              menangani siklus penuh kebutuhan steam boiler — dari desain dan fabrikasi unit
              baru, perawatan berkala, hingga upgrade kapasitas dan konversi bahan bakar.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Insinyur dan teknisi bersertifikat bejana tekan',
                'Dokumentasi lengkap: uji hidrostatik, laporan material, datasheet',
                'Layanan darurat 24 jam untuk meminimalkan downtime produksi',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-ink-body">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-amber" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                variant="outline-navy"
                size="md"
                onClick={() => onNavigate('/tentang')}
                icon={<ArrowRight size={16} />}
              >
                Selengkapnya tentang kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LAYANAN ===== */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel label="LAYANAN">Tiga pilar utama</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
                Menangani seluruh siklus hidup steam boiler Anda
              </h2>
            </div>
            <Button
              variant="outline-navy"
              size="md"
              onClick={() => onNavigate('/layanan')}
              icon={<ArrowRight size={16} />}
            >
              Detail layanan
            </Button>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.no} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERTIFIKASI ===== */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionLabel label="STANDAR">Sertifikasi &amp; keselamatan</SectionLabel>
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-3xl font-medium text-navy lg:col-span-7 lg:text-4xl">
            Setiap unit mengikuti standar nasional untuk bejana tekan
          </h2>
          <p className="text-ink-muted lg:col-span-5">
            Sertifikasi dan kepatuhan K3 adalah syarat utama dalam industri bejana tekan.
            Kami menjalankan dokumentasi dan pengujian sesuai regulasi yang berlaku.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {certifications.map((c) => (
            <CertificationBadge key={c.code} {...c} />
          ))}
        </div>
      </section>

      {/* ===== PROYEK PREVIEW ===== */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel label="PROYEK">Portofolio pilihan</SectionLabel>
              <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
                Studi kasus dengan hasil terukur
              </h2>
            </div>
            <Button
              variant="outline-navy"
              size="md"
              onClick={() => onNavigate('/proyek')}
              icon={<ArrowRight size={16} />}
            >
              Semua proyek
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.id} className="group flex flex-col border border-line transition-colors hover:border-navy">
                <PhotoArea src={p.image} alt={p.title} ratio="4/3" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="label-caps text-amber-dark">{p.sector}</span>
                  <h3 className="mt-3 text-lg font-medium text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{p.capacity}</p>
                  <p className="mt-3 text-sm text-ink-body">{p.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONI ===== */}
      <section className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
        <SectionLabel label="KLIEN">Testimoni</SectionLabel>
        <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
          Kepercayaan dari pengambil keputusan teknis
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col bg-surface p-8">
              <blockquote className="flex-1 text-ink-body">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-ink-muted">
                  {t.role}, {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== TIM =====
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <SectionLabel label="KEAHLIAN">Tim teknik</SectionLabel>
          <h2 className="mt-5 max-w-xl text-3xl font-medium text-navy lg:text-4xl">
            Insinyur dan teknisi bersertifikat
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="flex flex-col">
                <PhotoArea src={m.image} alt={m.name} ratio="3/4" />
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-navy">{m.name}</h3>
                  <p className="text-sm font-medium text-amber-dark">{m.role}</p>
                  <p className="mt-1 text-sm text-ink-muted">{m.credential}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== CTA AKHIR + FORM KONTAK ===== */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="label-caps text-amber">MINTA PENAWARAN</span>
              <h2 className="mt-5 text-3xl font-medium leading-tight lg:text-4xl">
                Jadwalkan survei lapangan untuk kebutuhan boiler Anda
              </h2>
              <p className="mt-5 text-white/75">
                Isi formulir di samping. Tim teknik akan menghubungi Anda untuk
                meninjau lokasi, kapasitas, dan kondisi unit sebelum menyusun penawaran.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Flame size={22} className="mt-0.5 flex-none text-amber" />
                  <div>
                    <p className="font-semibold">Pembuatan baru</p>
                    <p className="text-sm text-white/70">Desain &amp; fabrikasi custom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench size={22} className="mt-0.5 flex-none text-amber" />
                  <div>
                    <p className="font-semibold">Perawatan</p>
                    <p className="text-sm text-white/70">Servis &amp; layanan darurat</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings2 size={22} className="mt-0.5 flex-none text-amber" />
                  <div>
                    <p className="font-semibold">Upgrade</p>
                    <p className="text-sm text-white/70">Retrofit &amp; efisiensi energi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-sm bg-surface p-6 text-ink-body lg:p-8">
              <h3 className="text-xl font-medium text-navy">Formulir permintaan survei</h3>
              <p className="mt-2 text-sm text-ink-muted">
                fields bertanda * wajib diisi.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
