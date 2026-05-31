import { motion } from 'motion/react';
import { Heart, Sparkles, Shield, Users } from 'lucide-react';

const impactPoints = [
  { icon: Shield, label: "Tactical helmets & armor" },
  { icon: Users, label: "Soldiers & their families" },
  { icon: Sparkles, label: "Art, healing & hope" },
];

export function Donate() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-bg-dark)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 dynamic-luxury-bg opacity-80" />

      {/* Color blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 rounded-[100%] blur-[100px] pointer-events-none float-slow" />
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-accent-bright/20 rounded-full blur-[120px] pointer-events-none float-medium mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-electric/15 rounded-full blur-[100px] pointer-events-none float-fast mix-blend-screen" />
      <div className="absolute bottom-[-5%] right-[20%] w-[300px] h-[300px] bg-violet/20 rounded-full blur-[100px] pointer-events-none float-slow mix-blend-screen" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-20 h-20 flex items-center justify-center mb-10"
          >
            <div className="absolute inset-0 bg-accent-bright/30 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent-bright to-[#B5179E] rounded-2xl shadow-[0_0_30px_rgba(247,37,133,0.5)]">
              <Heart className="w-8 h-8 text-white" fill="rgba(255,255,255,0.3)" />
            </div>
          </motion.div>

          {/* Headline */}
          <h4 className="font-accent text-accent text-xs font-bold tracking-[0.35em] uppercase mb-4">Support the Mission</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 italic leading-tight drop-shadow-xl">
            Join the <span className="gold-text-gradient not-italic">Mission</span>
          </h2>

          {/* Divider */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-accent to-transparent mb-8" />

          <p className="text-lg md:text-xl font-light italic text-white/75 mb-10 max-w-2xl leading-relaxed">
            Every donation directly supports IDF soldiers with life-saving gear and essential supplies.
          </p>

          {/* Impact points */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {impactPoints.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-sm hover:bg-white/12 hover:border-accent/40 transition-all duration-300"
              >
                <Icon size={14} className="text-accent shrink-0" />
                <span className="font-accent text-white/80 text-xs uppercase tracking-widest">{label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn w-full sm:w-auto bg-gradient-to-r from-accent-bright to-[#B5179E] text-white px-12 py-5 font-accent font-bold tracking-widest rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(247,37,133,0.4)] hover:shadow-[0_0_50px_rgba(247,37,133,0.7)] text-sm uppercase"
            >
              Donate via IsraelGives
            </a>
            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white hover:bg-white/8 hover:border-accent/50 font-accent font-bold tracking-widest rounded-sm transition-all shadow-lg text-sm uppercase backdrop-blur-sm"
            >
              PayPal / Bit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
