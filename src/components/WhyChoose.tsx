import { Armchair, Award, Heart, ShieldCheck, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

const VALUES: Value[] = [
  {
    title: 'Professional Care',
    description: 'Trained hands, hygienic tools and premium products chosen for healthy hair and skin.',
    icon: ShieldCheck,
  },
  {
    title: 'Experienced Styling',
    description: 'A creative eye for bridal, party and everyday looks that suit your features and style.',
    icon: Award,
  },
  {
    title: 'Personalised Service',
    description: 'We begin with a consultation, so every recommendation is shaped around you.',
    icon: Heart,
  },
  {
    title: 'Comfortable Atmosphere',
    description: 'A calm, elegant studio where you can relax, unwind and enjoy every moment.',
    icon: Armchair,
  },
];

export default function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Why Choose DEZERT</span>
            <h2 id="why-heading" className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
              Luxury that feels personal
            </h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 100} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-primary-300/60 bg-accent-50 p-8 transition duration-500 hover:-translate-y-1 hover:border-primary-400 hover:bg-white hover:shadow-lift">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-600 shadow-soft ring-1 ring-primary-300/70 transition duration-500 group-hover:scale-110 group-hover:bg-primary-400 group-hover:text-secondary-900">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-serif text-2xl font-semibold text-secondary-900">{value.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-[1.5] text-secondary-700">{value.description}</p>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-300 to-primary-500 transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
