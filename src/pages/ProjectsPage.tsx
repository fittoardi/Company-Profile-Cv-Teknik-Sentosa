import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { PhotoArea } from '@/components/ui/PhotoArea';
import { company, projects, sectors } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

export function ProjectsPage({ onNavigate }: Props) {
  const [active, setActive] = useState<(typeof sectors)[number]>('Semua');

  const filtered =
    active === 'Semua' ? projects : projects.filter((p) => p.sector === active);

  return (
    <PageShell title={`Proyek — ${company.name}`}>
      {/* Header */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 lg:py-24">
          <SectionLabel label="PROYEK">Portofolio</SectionLabel>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight text-navy lg:text-5xl">
            Studi kasus dengan detail teknis dan hasil terukur
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Proyek tersebar di sektor manufaktur, F&amp;B, tekstil, kelapa sawit, dan energi.
            Saring berdasarkan sektor industri untuk melihat relevansi dengan kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="mx-auto max-w-8xl px-5 py-16 lg:px-10 lg:py-24">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2">
          {sectors.map((sector) => {
            const isActive = active === sector;
            return (
              <button
                key={sector}
                onClick={() => setActive(sector)}
                className={`border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-navy bg-navy text-white'
                    : 'border-line bg-surface text-ink-muted hover:border-navy hover:text-navy'
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>

        {/* Grid proyek */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.id} className="group flex flex-col border border-line transition-colors hover:border-navy">
              <PhotoArea src={p.image} alt={p.title} ratio="16/9" />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="label-caps text-amber-dark">{p.sector}</span>
                  <span className="text-xs text-ink-muted">{p.client}</span>
                </div>
                <h2 className="mt-3 text-xl font-medium text-navy">{p.title}</h2>
                <p className="mt-3 text-sm font-medium text-navy-medium">{p.capacity}</p>

                <div className="mt-5 space-y-4 text-sm">
                  <div>
                    <p className="label-caps text-ink-muted/70">Tantangan</p>
                    <p className="mt-1 text-ink-body">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="label-caps text-ink-muted/70">Hasil</p>
                    <p className="mt-1 text-ink-body">{p.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink-muted">Belum ada proyek pada sektor ini.</p>
        )}
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 px-5 py-16 sm:flex-row sm:items-center lg:px-10 lg:py-20">
          <div>
            <h2 className="text-2xl font-medium lg:text-3xl">Proyek Anda berikutnya?</h2>
            <p className="mt-2 text-white/75">Diskusikan kapasitas dan kebutuhan dengan tim teknik kami.</p>
          </div>
          <Button
            variant="amber"
            size="lg"
            onClick={() => onNavigate('/kontak')}
            icon={<ArrowRight size={18} />}
          >
            Konsultasi proyek
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
