import { useMemo, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, type GalleryCategory } from '@/data/gallery';

type Filter = 'All' | GalleryCategory;

const FILTERS: Filter[] = ['All', ...GALLERY_CATEGORIES];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Gallery</span>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Looks we are proud of</h2>
            <div className="gold-divider mx-auto mt-6" aria-hidden="true" />
          </div>
        </Reveal>

        <div role="tablist" aria-label="Filter gallery" className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {FILTERS.map((option) => {
            const active = filter === option;
            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(option)}
                className={`rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 sm:px-5 ${
                  active
                    ? 'border-primary-400 bg-primary-400 text-secondary-900 shadow-gold'
                    : 'border-primary-300 bg-white text-secondary-800 hover:border-primary-400 hover:bg-primary-50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View ${item.alt}`}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-accent-100 text-left shadow-soft ring-1 ring-primary-200/70 animate-fade-up focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105 ${
                  item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-secondary-900/80 via-secondary-900/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="flex items-end justify-between gap-3">
                  <span>
                    <span className="block font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-200">
                      {item.category}
                    </span>
                    <span className="mt-1 block font-serif text-xl font-semibold text-white">{item.alt}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-secondary-900">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}