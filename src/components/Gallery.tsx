import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { helmetsData } from '../data/helmetsData';

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null);
      }
    };

    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  return (
    <section className="section bg-bg-light">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow">Field gallery</p>
          <h2 className="heading-lg">Moments from delivery, community, and art</h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:gap-4 sm:overflow-visible sm:pb-0 sm:snap-none sm:grid-cols-2 lg:grid-cols-3">
          {helmetsData.map((helmet, index) => (
            <button
              key={helmet.id}
              type="button"
              onClick={() => setLightbox(helmet.imageSrc)}
              className="surface-card group min-w-[84vw] snap-center overflow-hidden p-2 text-left sm:min-w-0"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={helmet.imageSrc}
                alt={helmet.name}
                className="h-56 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-64"
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
            className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/90 p-4 pt-20 sm:items-center sm:pt-4"
            onClick={() => setLightbox(null)}
          >
            <img
              src={lightbox}
              alt="Expanded gallery"
              className="max-h-[85vh] w-full max-w-[min(100vw-2rem,960px)] rounded-xl object-contain"
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightbox(null)}
              className="fixed right-4 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
