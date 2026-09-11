import { MapPin, Phone, Mail } from 'lucide-react';
import { company, navItems } from '@/lib/constants';

type Props = {
  onNavigate: (path: string) => void;
};

export function Footer({ onNavigate }: Props) {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto max-w-8xl px-5 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Tentang singkat */}
          <div>
            <div className="flex items-center gap-2">
              <img src="assets/Logo.png" alt={company.name} className="h-8 w-8" />
              <span className="text-base font-semibold">{company.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Spesialis pembuatan, perawatan, dan upgrade steam boiler industri bersertifikat. Melayani sektor manufaktur, F&amp;B, tekstil, kelapa sawit, dan energi.
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
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Hak cipta dilindungi.
          </p>
          <p>Bejana tekan — dirancang &amp; difabrikasi sesuai SNI &amp; K3 Kemnaker</p>
        </div>
      </div>
    </footer>
  );
}