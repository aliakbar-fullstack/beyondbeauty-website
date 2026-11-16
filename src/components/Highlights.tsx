import { useEffect, useRef, useState } from 'react';
import { Award, Smile, Sparkles, Star, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { SERVICE_CATEGORIES } from '@/data/services';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  icon: LucideIcon;
  note: string;
}

const STATS: Stat[] = [
  { label: 'Happy Clients', value: 3000, suffix: '+', icon: Smile, note: 'Brides, guests and everyday clients' },
  { label: 'Professional Services', value: SERVICE_CATEGORIES.length, suffix: '', icon: Sparkles, note: 'Eight signature categories' },
  { label: 'Years of Experience', value: 5, suffix: '+', icon: Award, note: 'Refined craft in hair and makeup' },
  { label: 'Customer Satisfaction', value: 4.8, suffix: '/5', decimals: 1, icon: Star, note: 'Google Maps rating reference' },
];

function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Number((target * eased).toFixed(decimals)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, decimals]);

  return { ref, value };
}

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const { ref, value } = useCountUp(stat.value, stat.decimals ?? 0);
  const Icon = stat.icon;

  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-3xl border border-primary-300/60 bg-white p-7 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-lift">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-300/70 transition-colors duration-500 group-hover:bg-primary-400 group-hover:text-secondary-900">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div ref={ref} className="mt-6 font-serif text-5xl font-medium text-secondary-900 tabular-nums">
          {value.toLocaleString('en-IN', { minimumFractionDigits: stat.decimals ?? 0, maximumFractionDigits: stat.decimals ?? 0 })}
          <span className="text-3xl text-primary-600">{stat.suffix}</span>
        </div>
        <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-secondary-800">{stat.label}</p>
        <p className="mt-2 font-sans text-sm text-secondary-600">{stat.note}</p>
      </div>
    </Reveal>
  );
}

export default function Highlights() {
  return (
    <section aria-label="Studio highlights" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Studio Highlights</span>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">A studio trusted for its finish</h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
