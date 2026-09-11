import { useEffect, useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { company, navItems } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

type Props = {
  currentPath: string;
  onNavigate: (path: string) => void;
};

export function Navbar({ currentPath, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path: string) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line bg-surface/95 backdrop-blur'
          : 'border-transparent bg-surface'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 lg:px-10">
        {/* Logo / nama usaha */}
        <button
          onClick={() => go('/')}
          className="flex items-center gap-2 text-left"
          aria-label={company.name}
        >
          <span className="flex h-9 w-9 items-center justify-center bg-navy text-white">
            <span className="text-sm font-bold">SB</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold text-navy">{company.name}</span>
            <span className="text-[11px] text-ink-muted">Steam Boiler Industri</span>
          </span>
        </button>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = currentPath === item.path;
            return (
              <li key={item.path}>
                <button
                  onClick={() => go(item.path)}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-navy' : 'text-ink-muted hover:text-navy'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline-navy" size="md" onClick={() => go('/kontak')} icon={<PhoneCall size={15} />}>
            Minta Penawaran
          </Button>
        </div>

        {/* Tombol menu mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
          aria-label="Buka menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navItems.map((item) => {
              const active = currentPath === item.path;
              return (
                <li key={item.path} className="border-b border-line last:border-0">
                  <button
                    onClick={() => go(item.path)}
                    className={`block w-full py-4 text-left text-base font-medium ${
                      active ? 'text-navy' : 'text-ink-body'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="px-5 pb-6 pt-2">
            <Button
              variant="amber"
              size="lg"
              className="w-full"
              onClick={() => go('/kontak')}
            >
              Minta Penawaran
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
