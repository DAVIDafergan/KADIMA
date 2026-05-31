import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.06, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden radiant-bg">
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ scale: imageScale }}
          src="https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg"
          alt="IDF Soldiers"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />
      </div>

      <motion.div
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16"
      >
        <p className="font-accent text-accent uppercase tracking-[0.28em] text-xs md:text-sm mb-6">
          Est. October 7, 2023
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
          Protecting Those
          <br />
          <span className="gold-text-gradient">Who Protect Us</span>
        </h1>

        <p className="text-white/90 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Kadima Concierge delivers essential tactical gear, wellness support, and meaningful community care to IDF soldiers across Israel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://my.israelgives.org/en/fundme/kadima_concierge"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-[var(--color-primary)] px-10 py-4 font-accent font-semibold tracking-[0.16em] rounded-sm hover:bg-[#f2c777] transition-colors uppercase text-xs border border-[#d8a956]"
          >
            Donate Now
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('about');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-4 border border-white/35 text-white hover:bg-white/10 transition-colors font-accent font-semibold uppercase tracking-[0.16em] rounded-sm text-xs"
          >
            Our Mission
          </button>
        </div>
      </motion.div>

      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/65 hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-accent uppercase tracking-[0.3em] text-[10px]">Scroll</span>
      </button>
    </section>
  );
}
