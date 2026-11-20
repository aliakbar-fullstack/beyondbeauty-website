import { Clock, Heart, MapPin, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/data/navigation';
import { STUDIO } from '@/lib/studio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary-900 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs font-sans text-sm leading-[1.5] text-white/70">
            A premium makeover studio in Tirur, offering bridal, hair, skin and nail care with refined, personal attention.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">Quick Links</h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-sans text-sm text-white/75 transition-colors duration-300 hover:text-primary-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">Contact</h3>
          <ul className="mt-6 space-y-4 font-sans text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" aria-hidden="true" />
              <span className="leading-[1.5]">{STUDIO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" aria-hidden="true" />
              <a href={`tel:${STUDIO.phoneTel}`} className="transition-colors hover:text-primary-300">
                {STUDIO.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" aria-hidden="true" />
              <span>{STUDIO.hoursDisplay}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">Visit Us</h3>
          <p className="mt-6 font-sans text-sm leading-[1.5] text-white/75">
            Find us on the Edappal–Tirur Road, near the Indian Oil petrol pump in Pottethappadi.
          </p>
          <a
            href={STUDIO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary-300 transition-colors hover:text-primary-200"
          >
            Get directions
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 font-sans text-xs text-white/60 sm:flex-row sm:px-8">
          <p>&copy; {year} {STUDIO.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
          </p>
        </div>
      </div>
    </footer>
  );
}
