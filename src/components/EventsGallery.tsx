import { AnimatePresence, motion, useInView } from 'motion/react';
import { X, Calendar, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';

interface EventItem {
  src: string;
  title: string;
  date: string;
  location: string;
  alt: string;
}

const events: EventItem[] = [
  {
    src: 'https://github.com/user-attachments/assets/54d61b99-5ecc-45f4-81ec-f526c55ced19',
    title: 'Helmets4Chayalim Exhibit',
    date: 'May 18, 2025',
    location: 'Hagana Museum, Tel Aviv-Yafo',
    alt: 'Helmets4Chayalim Exhibit at Hagana Museum – International Museum Day',
  },
  {
    src: 'https://github.com/user-attachments/assets/1001921c-77d7-405d-858b-68cd5d5801e2',
    title: 'An Afternoon of Appreciation',
    date: 'May 17, 2025',
    location: 'Bar Arba Shmone, Tel Mond',
    alt: 'Helmets4Chayalim – An Afternoon of Appreciation at Bar Arba Shmone',
  },
  {
    src: 'https://github.com/user-attachments/assets/e8020f16-119c-49c7-999f-f0ad9d2c6a13',
    title: 'Helmets4Chayalim Exhibition',
    date: 'April 21–23, 2025',
    location: 'Tel Mond | Jerusalem | Netanya',
    alt: "Helmets4Chayalim – Yom Hazikaron & Yom Ha'atzmaut Exhibition",
  },
  {
    src: 'https://github.com/user-attachments/assets/bdeecdb0-e121-4dc3-871a-5f101644b306',
    title: "מעין אחרית הימים – יהודה עמיחי",
    date: 'February 12, 2026',
    location: 'מוזיאון ה"הגנה", תל אביב',
    alt: 'הזמנה לתערוכה – מעין אחרית הימים',
  },
];

const fieldPhotos = [
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/e2e6e639-c346-4777-ba88-12d6762b4bff.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/fc87f054-9d68-4674-897d-594ef9dab64a.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/6f7be831-c756-4be2-a422-88d00dff0129.jpg',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const shimmerVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: '100%',
    transition: { duration: 1.2, ease: 'easeInOut', delay: 0.3 },
  },
};

export function EventsGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const eventsInView = useInView(eventsRef, { once: true, margin: '-80px' });
  const photosInView = useInView(photosRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Event Flyers ── */}
      <section className="section bg-bg-light">
        <div className="container-shell">
          <div className="section-title-wrap">
            <p className="heading-eyebrow">פעילות &amp; אירועים</p>
            <h2 className="heading-lg">Events &amp; Exhibitions</h2>
            <p className="text-muted mt-3 text-base leading-relaxed">
              From intimate community gatherings to full museum exhibitions — every event tells the story
              of solidarity, art, and protection.
            </p>
          </div>

          <motion.div
            ref={eventsRef}
            variants={containerVariants}
            initial="hidden"
            animate={eventsInView ? 'visible' : 'hidden'}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {events.map((event) => (
              <motion.div key={event.src} variants={cardVariants}>
                <button
                  type="button"
                  onClick={() => setLightbox(event.src)}
                  className="surface-card group relative w-full overflow-hidden p-0 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(24,18,37,0.18)]"
                  aria-label={`Open: ${event.title}`}
                >
                  {/* shimmer on load */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      variants={shimmerVariants}
                      className="pointer-events-none absolute inset-0 z-10 w-1/3 -skew-x-12 bg-white/20"
                    />
                    <img
                      src={event.src}
                      alt={event.alt}
                      className="h-80 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* golden overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0b18]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                        View
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-2 font-display text-base font-bold leading-snug text-primary">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <Calendar size={12} className="shrink-0 text-accent-strong" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <MapPin size={12} className="shrink-0 text-accent-strong" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Field Photos ── */}
      <section className="section section-dark">
        <div className="container-shell">
          <div className="section-title-wrap">
            <p className="heading-eyebrow" style={{ color: 'var(--color-accent)' }}>
              Field Gallery
            </p>
            <h2 className="heading-lg text-white">Moments from the Field</h2>
            <p className="text-muted-dark mt-3 text-base leading-relaxed">
              Delivery, community, and the art of every helmet.
            </p>
          </div>

          <motion.div
            ref={photosRef}
            variants={containerVariants}
            initial="hidden"
            animate={photosInView ? 'visible' : 'hidden'}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {fieldPhotos.map((src, i) => (
              <motion.div
                key={src}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(src)}
                  className="surface-card-dark group w-full overflow-hidden p-2 text-left"
                  aria-label={`Open field photo ${i + 1}`}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`Kadima field photo ${i + 1}`}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-white/0 transition-all duration-500 group-hover:ring-accent/60" />
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Expanded view"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[90vh] w-auto max-w-full rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              className="absolute right-5 top-5 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              <X size={22} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
