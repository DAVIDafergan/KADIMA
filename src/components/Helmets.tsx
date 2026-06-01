import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const helmets = [
  {
    id: 1,
    src: '/pomegranate-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'Rimon',
    hebrewName: 'רימון',
    artist: 'Michal Ben David',
    medium: 'Oil on Military Helmet',
    year: '2024',
    description:
      'The pomegranate — ancient symbol of abundance, fertility, and the 613 commandments — painted across a retired combat helmet. Where destruction once lived, life now blooms.',
    accent: '#C0392B',
    accentLight: 'rgba(192,57,43,0.15)',
  },
  {
    id: 2,
    src: '/flowers-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'Where Have All the Flowers Gone',
    hebrewName: 'אן פרחו כל הפרחים',
    artist: 'Naomi Shemer',
    medium: 'Acrylic on Military Helmet',
    year: '2024',
    description:
      'Poppies and daisies cascade across steel — a question, a lament, a prayer. Named after the timeless song, this helmet speaks for those who cannot.',
    accent: '#E67E22',
    accentLight: 'rgba(230,126,34,0.15)',
  },
  {
    id: 3,
    src: '/creation-helmet.jpg',
    fallbackSrc: 'https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg',
    name: 'The Creation',
    hebrewName: 'בראשית',
    artist: 'Yael Katz',
    medium: 'Mixed Media on Military Helmet',
    year: '2023',
    description:
      "Michelangelo's divine touch reimagined on a soldier's helmet. Between God's hand and Adam's — a soldier's outstretched arm, reaching toward something greater than war.",
    accent: '#BDC3C7',
    accentLight: 'rgba(189,195,199,0.12)',
  },
];

const DISPLAY_DURATION = 5000;
const EXIT_DURATION = 800;

export function Helmets() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: '-20%' });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const advance = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % helmets.length);
  };

  useEffect(() => {
    if (!isInView || isPaused) return;
    timerRef.current = setTimeout(advance, DISPLAY_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, isInView, isPaused]);

  const helmet = helmets[active];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#05040a] flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${active}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 30% 50%, ${helmet.accentLight} 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 80% 20%, rgba(229,178,93,0.06) 0%, transparent 60%),
              linear-gradient(160deg, #0a0810 0%, #05040a 100%)
            `,
          }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="relative z-10 pt-20 pb-0 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-accent text-[11px] uppercase tracking-[0.45em] text-accent/70"
        >
          Helmets 4 Chayalim — The Collection
        </motion.p>
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-10 lg:py-0 max-w-7xl mx-auto w-full">

        <div className="w-full lg:w-[45%] flex flex-col justify-center pr-0 lg:pr-16 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="font-display font-black text-7xl leading-none tabular-nums select-none"
                  style={{ color: helmet.accent, opacity: 0.18 }}
                >
                  {String(active + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${helmet.accent}60, transparent)` }} />
              </div>

              <p className="font-artistic text-white/25 text-xl mb-2 tracking-wide">
                {helmet.hebrewName}
              </p>

              <h2
                className="font-display font-black text-4xl md:text-5xl xl:text-6xl text-white leading-[1.05] mb-2"
                style={{ letterSpacing: '-0.02em' }}
              >
                {helmet.name}
              </h2>

              <div className="flex items-center gap-3 mb-8 mt-3">
                <div className="w-5 h-px bg-accent/50" />
                <p className="font-accent text-xs uppercase tracking-[0.3em] text-white/45">
                  {helmet.artist} · {helmet.medium} · {helmet.year}
                </p>
              </div>

              <p className="font-body font-light text-lg text-white/65 leading-relaxed max-w-md mb-10">
                {helmet.description}
              </p>

              <div className="flex gap-2 mb-10">
                {helmets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="h-[2px] flex-1 relative overflow-hidden rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                    aria-label={`Go to helmet ${i + 1}`}
                  >
                    {i === active && (
                      <motion.div
                        className="absolute inset-y-0 left-0"
                        style={{ background: helmet.accent }}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? undefined : '100%' }}
                        transition={{ duration: DISPLAY_DURATION / 1000, ease: 'linear' }}
                      />
                    )}
                    {i < active && (
                      <div className="absolute inset-0" style={{ background: helmet.accent, opacity: 0.5 }} />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate('/join')}
                className="group flex items-center gap-3 self-start font-accent text-xs uppercase tracking-[0.25em] text-white/50 hover:text-accent transition-colors duration-300"
              >
                <span>Read the Full Story</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-[55%] flex items-center justify-center order-1 lg:order-2 relative" style={{ minHeight: '60vmin' }}>

          <AnimatePresence mode="sync">
            <motion.div
              key={`glow-${active}`}
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{
                background: `radial-gradient(ellipse 55% 55% at 50% 55%, ${helmet.accentLight} 0%, transparent 70%)`,
              }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`helmet-${active}`}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  opacity: 0,
                  x: dir > 0 ? 120 : -120,
                  rotate: dir > 0 ? 14 : -14,
                  scale: 0.82,
                  filter: 'blur(12px)',
                }),
                center: {
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
                },
                exit: (dir: number) => ({
                  opacity: 0,
                  x: dir > 0 ? -100 : 100,
                  rotate: dir > 0 ? -10 : 10,
                  scale: 0.88,
                  filter: 'blur(8px)',
                  transition: { duration: EXIT_DURATION / 1000, ease: [0.4, 0, 1, 1] },
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative select-none"
              style={{ maxWidth: '480px', width: '90%' }}
            >
              <div
                className="absolute bottom-[-6%] left-[10%] right-[10%] h-[12%] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${helmet.accent}50 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />
              <div className="relative z-10 bg-transparent">
                <img
                  src={helmet.src}
                  onError={(e) => { (e.target as HTMLImageElement).src = helmet.fallbackSrc; }}
                  alt={helmet.name}
                  className="w-full h-auto object-contain relative z-10"
                  style={{
                    filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(0,0,0,0.4))',
                    background: 'transparent'
                  }}
                  draggable={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => goTo((active - 1 + helmets.length) % helmets.length)}
            className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/30 hover:text-white hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous helmet"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={() => goTo((active + 1) % helmets.length)}
            className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/30 hover:text-white hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next helmet"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div className="relative z-10 pb-16 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={`caption-${active}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-accent text-[10px] uppercase tracking-[0.4em] text-white/20"
          >
            {active + 1} of {helmets.length} · Helmets 4 Chayalim Collection
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
