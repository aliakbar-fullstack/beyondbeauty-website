import { Check, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { STUDIO } from '@/lib/studio';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1400&fit=crop';

const HIGHLIGHTS = [
  'Bridal, party and everyday makeovers',
  'Precision hair cutting, colour and treatments',
  'Customised skin care and luxury nail rituals',
  'A calm, private studio experience',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-accent-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-primary-300/70" aria-hidden="true" />
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={ABOUT_IMAGE}
                alt="Modern DEZERT studio interior with styling chairs and warm lighting"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 right-6 flex items-center gap-4 rounded-2xl border border-primary-300/60 bg-white px-5 py-4 shadow-lift sm:right-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-400 text-secondary-900">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-lg font-semibold leading-tight text-secondary-900">Tirur, Kerala</p>
                <p className="font-sans text-xs text-secondary-600">Edappal–Tirur Road</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <span className="section-eyebrow">About DEZERT</span>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
              Beauty, Elegance <span className="italic text-primary-700">&amp;</span> Confidence
            </h2>
            <div className="gold-divider mt-8 !mx-0 !w-24" aria-hidden="true" />
            <p className="mt-8 font-sans text-base leading-[1.5] text-secondary-700 sm:text-lg">
              DEZERT Makeover Studio is a premium beauty destination in Tirur, bringing together expert hair, skin,
              makeup and nail care under one refined roof. Every appointment begins with a conversation, so the look
              you leave with feels entirely like you, only more polished.
            </p>
            <p className="mt-5 font-sans text-base leading-[1.5] text-secondary-700 sm:text-lg">
              From intimate bridal preparations to a quick grooming refresh, our team brings careful technique, quality
              products and unhurried attention to every detail.
            </p>

            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-secondary-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-10 font-sans text-sm text-secondary-600">
              Studio open daily, <span className="font-semibold text-secondary-800">{STUDIO.hoursDisplay}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
