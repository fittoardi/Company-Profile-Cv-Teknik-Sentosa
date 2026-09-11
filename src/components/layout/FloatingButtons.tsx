import { useState } from 'react';
import { MessageCircle, Siren, Phone, X } from 'lucide-react';
import { company } from '@/lib/constants';

/*
  Tombol mengambang di semua halaman:
  - WhatsApp mengambang (utama)
  - Layanan darurat (jika usaha melayani perbaikan mendadak)
*/
export function FloatingButtons() {
  const [showEmergency, setShowEmergency] = useState(false);

  const waText = encodeURIComponent(
    'Halo, saya ingin konsultasi mengenai kebutuhan steam boiler industri.'
  );
  const waLink = `https://wa.me/${company.whatsapp}?text=${waText}`;
  const emergencyWaText = encodeURIComponent(
    'LAYANAN DARURAT: Boiler kami bermasalah dan butuh perbaikan segera. Lokasi: '
  );
  const emergencyWaLink = `https://wa.me/${company.emergencyWhatsapp}?text=${emergencyWaText}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Panel layanan darurat */}
      {showEmergency && (
        <div className="w-72 overflow-hidden rounded-lg border border-line bg-surface shadow-lg">
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Siren size={16} className="text-amber" />
              <span className="text-sm font-semibold">Layanan Darurat 24 Jam</span>
            </div>
            <button onClick={() => setShowEmergency(false)} aria-label="Tutup">
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-ink-muted">
              Kerusakan boiler kritis? Tim teknisi siap datang secepatnya.
            </p>
            <a
              href={`tel:${company.emergencyPhone}`}
              className="mt-3 flex items-center justify-center gap-2 bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-medium"
            >
              <Phone size={15} />
              {company.emergencyPhone}
            </a>
            <a
              href={emergencyWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 border border-navy px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <MessageCircle size={15} />
              Chat WhatsApp Darurat
            </a>
          </div>
        </div>
      )}

      {/* Tombol darurat */}
      <button
        onClick={() => setShowEmergency((v) => !v)}
        className="group flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-white shadow-lg transition-all hover:bg-navy-medium"
        aria-label="Layanan darurat"
      >
        <Siren size={20} className="text-amber" />
        <span className="hidden text-sm font-semibold sm:inline">Layanan Darurat</span>
      </button>

      {/* Tombol WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-amber-dark shadow-lg transition-transform hover:scale-105"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
