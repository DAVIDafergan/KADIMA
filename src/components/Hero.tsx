import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -48]);
  const topLineY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const bottomLineY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden radiant-bg">
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ scale: imageScale }}
          src="https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg"
          alt="IDF Soldiers"
          className="w-full h-full object-cover opacity-[0.15]"
        />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27 x=%270%27 y=%270%27 width=%27100%25%27 height=%27100%25%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.92%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27 opacity=%270.85%27/%3E%3C/svg%3E")',
            opacity: 0.04,
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />
      </div>

      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16"
      >
        <p className="text-accent/80 uppercase tracking-[0.35em] text-[10px] md:text-[11px] mb-10 font-light">
          Est. October 7, 2023
        </p>

        <h1
          className="font-display font-black text-white mb-8 leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
        >
          <motion.span style={{ y: topLineY }} className="block">
            Protecting Those
          </motion.span>
          <motion.span style={{ y: bottomLineY }} className="gold-text-gradient block">
            Who Protect Us
          </motion.span>
        </h1>

        <p className="text-white/85 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Kadima Concierge delivers essential tactical gear, wellness support, and meaningful community care to IDF soldiers across Israel.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://my.israelgives.org/en/fundme/kadima_concierge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-[var(--color-primary)] px-12 py-5 font-accent font-semibold tracking-[0.16em] rounded-sm hover:bg-[#f2c777] transition-colors uppercase text-xs border border-[#d8a956]"
          >
            Donate Now
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('about');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-9 py-4 border border-white/35 text-white hover:bg-white/10 transition-colors font-accent font-semibold uppercase tracking-[0.16em] rounded-sm text-[11px]"
          >
            Our Mission
          </button>
        </div>
      </motion.div>

      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/65 hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-3 h-3 border-r border-b border-accent rotate-45"
        />
      </button>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
