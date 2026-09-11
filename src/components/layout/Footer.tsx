import { MapPin, Phone, Mail, Download } from 'lucide-react';
import { company, navItems } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto max-w-8xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Tentang singkat */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center bg-amber text-amber-dark">
                <span className="text-sm font-bold">SB</span>
              </span>
              <span className="text-base font-semibold">{company.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Spesialis pembuatan, perawatan, dan upgrade steam boiler industri bersertifikat. Melayani sektor manufaktur, F&B, tekstil, kelapa sawit, dan energi.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <p className="label-caps text-white/50">Navigasi</p>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-sm text-white/80 transition-colors hover:text-amber"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <p className="label-caps text-white/50">Kontak</p>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-none text-amber" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-none text-amber" />
                <a href={`tel:${company.phone}`} className="hover:text-amber">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-none text-amber" />
                <a href={`mailto:${company.email}`} className="hover:text-amber">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Brosur */}
          <div>
            <p className="label-caps text-white/50">Profil Perusahaan</p>
            <p className="mt-4 text-sm text-white/70">
              Unduh brosur lengkap berisi spesifikasi layanan, sertifikasi, dan portofolio.
            </p>
            <a
              href={company.brochureUrl}
              download
              className="mt-4 inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber hover:text-amber-dark hover:border-amber"
            >
              <Download size={16} />
              Unduh Brosur PDF
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Hak cipta dilindungi.
          </p>
          <p>Bejana tekan — dirancang & difabrikasi sesuai SNI & K3 Kemnaker</p>
        </div>
      </div>
    </footer>
  );
}
