import { ArrowRight, ChevronDown, CalendarCheck, Star } from 'lucide-react';
import { GENERAL_BOOKING_MESSAGE, STUDIO, buildWhatsAppUrl } from '@/lib/studio';

const HERO_IMAGE =
  'https://images.pexels.com/photos/35983950/pexels-photo-35983950.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-secondary-900">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary-900/90 via-secondary-900/65 to-secondary-900/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary-900/80 via-transparent to-secondary-900/30" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:pt-40">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-primary-300/50 bg-white/10 px-4 py-2 font-sans text-xs font-medium uppercase tracking-[0.25em] text-primary-200 backdrop-blur-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
            Tirur, Kerala
          </p>

          <h1
            className="animate-fade-up mt-6 font-serif text-5xl font-medium leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s' }}
          >
            Where Beauty <span className="italic text-primary-300">Meets</span> Elegance
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl font-sans text-base leading-[1.5] text-white/85 sm:text-lg"
            style={{ animationDelay: '0.4s' }}
          >
            Discover your beauty with professional care, expert styling and a premium makeover experience at DEZERT.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href={buildWhatsAppUrl(GENERAL_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Your Appointment
            </a>
            <a href="#services" className="btn-outline-gold group border-white/60 text-white hover:bg-white/10">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>

          <div
            className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-sans text-sm text-white/80"
            style={{ animationDelay: '0.7s' }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-primary-300" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>
                <span className="font-semibold text-white">{STUDIO.googleRating} / 5.0</span> on Google Maps
              </span>
            </span>
            <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
            <span>Open daily, 9:30 AM – 10:00 PM</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about the studio"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white md:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce-soft" aria-hidden="true" />
      </a>
    </section>
  );
}
