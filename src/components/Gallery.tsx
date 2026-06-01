import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

const images = [
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/e2e6e639-c346-4777-ba88-12d6762b4bff.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/fc87f054-9d68-4674-897d-594ef9dab64a.jpg',
  'https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/6f7be831-c756-4be2-a422-88d00dff0129.jpg',
];

function GalleryCard({ src, i, onClick }: { src: string; i: number; onClick: () => void }) {
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 250, damping: 28 });
  const springRotY = useSpring(rotY, { stiffness: 250, damping: 28 });
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 180, scale: 0.88, rotateY: 25 },
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateY: 0,
          transition: { type: 'spring', stiffness: 55, damping: 14, mass: 1.1 },
        },
      }}
      className="relative w-full md:w-1/3 aspect-[4/5] group"
      style={{ perspective: 1000 }}
    >
      <motion.button
        type="button"
        onClick={onClick}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const cx = (e.clientX - rect.left) / rect.width - 0.5;
          const cy = (e.clientY - rect.top) / rect.height - 0.5;
          rotX.set(-cy * 18);
          rotY.set(cx * 18);
        }}
        onMouseLeave={() => {
          rotX.set(0);
          rotY.set(0);
        }}
        style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 1000 }}
        className="w-full h-full rounded-2xl overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.55)] transform-gpu transition-shadow duration-700 group-hover:shadow-[0_40px_80px_rgba(229,178,93,0.2)] bg-transparent"
        aria-label={`Open gallery image ${i + 1}`}
      >
        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0" />

        <div className="relative w-full h-full">
          {!loaded && <div className="absolute inset-0 bg-white/5 animate-pulse rounded-2xl z-10" />}
          <img
            src={src}
            alt={`Kadima Concierge ${i + 1}`}
            onLoad={() => setLoaded(true)}
            className={`relative z-10 w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${loaded ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#05080f]/90 via-[#05080f]/20 to-transparent z-20 pointer-events-none" />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)' }}
        />

        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-colors duration-700 z-30 pointer-events-none" />

        <div className="absolute bottom-5 left-5 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="font-artistic text-accent text-3xl">{String(i + 1).padStart(2, '0')}</span>
        </div>
      </motion.button>
    </motion.div>
  );
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 dynamic-luxury-bg relative overflow-hidden text-white border-b border-white/5 bg-[var(--color-bg-dark)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-accent-bright/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen float-fast" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#3A0CA3]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen float-slow" />
      <div className="absolute top-[30%] right-[20%] w-[250px] h-[250px] bg-electric/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen float-medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/5 font-artistic text-[150px] md:text-[200px] whitespace-nowrap pointer-events-none select-none blur-[2px] z-0">Gallery</div>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 italic tracking-wide drop-shadow-xl">
              From the <span className="font-artistic text-accent-bright text-6xl md:text-8xl lowercase drop-shadow-md transform -rotate-2 inline-block">Field</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 font-body text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            Moments captured from our missions — delivering gear, building community, creating art.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8 origin-center"
          />
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } } }}
        >
          {images.map((src, i) => (
            <div key={src} className="contents">
              <GalleryCard src={src} i={i} onClick={() => setLightbox(src)} />
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox}
              className="max-w-4xl max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
              alt="Expanded gallery"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
