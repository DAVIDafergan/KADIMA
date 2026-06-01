import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

const images = [
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/e2e6e639-c346-4777-ba88-12d6762b4bff.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/fc87f054-9d68-4674-897d-594ef9dab64a.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/6f7be831-c756-4be2-a422-88d00dff0129.jpg',
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section bg-bg-light">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow">Field gallery</p>
          <h2 className="heading-lg">Moments from delivery, community, and art</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(src)}
              className="surface-card group overflow-hidden p-2 text-left"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={src}
                alt={`Kadima gallery image ${index + 1}`}
                className="h-64 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox}
              alt="Expanded gallery"
              className="max-h-[88vh] w-auto max-w-full rounded-xl"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
