import { useEffect, useState } from 'react';
import { CalendarCheck, Menu } from 'lucide-react';
import Logo from '@/components/Logo';
import MobileMenu from '@/components/MobileMenu';
import { NAV_LINKS } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';
import { GENERAL_BOOKING_MESSAGE, buildWhatsAppUrl } from '@/lib/studio';

export default function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? 'border-b border-primary-400/30 bg-white/95 py-3 shadow-lg backdrop-blur-md'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
          <a href="#home" className="shrink-0" aria-label="DEZERT Makeover Studio home">
            <Logo tone={solid ? 'dark' : 'light'} />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary-400 after:transition-all after:duration-300 after:content-[''] hover:after:w-full ${
                    solid ? 'text-secondary-800 hover:text-primary-700' : 'text-white hover:text-primary-200'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl(GENERAL_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden !px-5 !py-3 lg:inline-flex"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
                solid
                  ? 'border-primary-400/60 text-secondary-900 hover:bg-primary-50'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
