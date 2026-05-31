import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.5], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 25, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 25, damping: 30 });

  const blob1X = useTransform(smoothX, [0, 1], [-50, 50]);
  const blob1Y = useTransform(smoothY, [0, 1], [-35, 35]);
  const blob2X = useTransform(smoothX, [0, 1], [40, -40]);
  const blob2Y = useTransform(smoothY, [0, 1], [30, -30]);
  const blob3X = useTransform(smoothX, [0, 1], [-25, 25]);
  const blob3Y = useTransform(smoothY, [0, 1], [-30, 30]);

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden radiant-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, filter: 'blur(10px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imageY }}
          src="https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg"
          alt="IDF Soldiers"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay filter grayscale-[50%]"
        />

        {/* Mouse-parallax color blobs */}
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-bright/20 rounded-full blur-[160px] mix-blend-screen pointer-events-none float-slow"
        />
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#3A0CA3]/30 rounded-full blur-[160px] mix-blend-screen pointer-events-none float-medium"
        />
        <motion.div
          style={{ x: blob3X, y: blob3Y }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/15 rounded-full blur-[130px] mix-blend-screen pointer-events-none float-fast"
        />
        {/* Electric blue accent */}
        <motion.div
          style={{ x: blob2X, y: blob1Y }}
          className="absolute top-[15%] right-[10%] w-[350px] h-[350px] bg-electric/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none float-slow"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[2px] w-32 bg-gradient-to-r from-transparent via-accent-bright to-transparent mb-8 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/50 w-1/4 animate-[slide_2s_infinite]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-artistic text-accent-bright text-3xl md:text-5xl transform -rotate-2 mb-2 drop-shadow-md z-20 mix-blend-lighten"
        >
          Est. October 7, 2023
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60, filter: 'blur(12px)', scale: 0.95 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black font-display text-white mb-6 italic leading-[0.95] drop-shadow-2xl relative"
        >
          <span className="absolute -top-12 -left-10 text-accent/30 font-artistic text-8xl md:text-9xl -rotate-12 blur-[2px] select-none pointer-events-none">Protect</span>
          Armor of the <br className="hidden md:block" />
          <span className="gold-text-gradient not-italic">Faithful.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/90 text-lg md:text-2xl font-light italic mb-12 max-w-3xl mx-auto leading-relaxed shadow-sm bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/5"
        >
          A grassroots initiative delivering critical tactical gear, sports equipment, wellness events, and meals to IDF troops across Israel. Founded by Seagal Hagege.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <a
            href="https://my.israelgives.org/en/fundme/kadima_concierge"
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn w-full sm:w-auto bg-gradient-to-r from-accent to-[#B8852B] text-[var(--color-primary)] px-12 py-5 font-accent font-bold tracking-widest rounded-sm shadow-[0_0_30px_rgba(229,178,93,0.45)] hover:shadow-[0_0_50px_rgba(229,178,93,0.7)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 uppercase text-sm border border-white/20"
          >
            Donate Now
          </a>
          <button
            onClick={() => {
              const el = document.getElementById('about');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-12 py-5 border border-accent-bright/50 text-white hover:bg-accent-bright/10 hover:border-accent-bright font-accent font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(247,37,133,0.2)] text-sm backdrop-blur-sm relative overflow-hidden group"
          >
            <span className="relative z-10 group-hover:text-accent-bright transition-colors duration-300">Our Mission</span>
            <div className="absolute inset-0 bg-accent-bright translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-accent text-white/30 text-[9px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
