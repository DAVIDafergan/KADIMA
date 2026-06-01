import { motion } from 'motion/react';
import { Heart, Sparkles, Shield, Users } from 'lucide-react';

const impactPoints = [
  { icon: Shield, label: "Tactical helmets & armor" },
  { icon: Users, label: "Soldiers & their families" },
  { icon: Sparkles, label: "Art, healing & hope" },
];

export function Donate() {
  return (
    <section id="donate" className="relative py-44 overflow-hidden bg-[var(--color-bg-dark)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 dynamic-luxury-bg opacity-80" />

      {/* Color blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/15 rounded-[100%] blur-[100px] pointer-events-none float-ambient-slow" />
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-accent/12 rounded-full blur-[120px] pointer-events-none float-ambient-medium mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none float-ambient-fast mix-blend-screen" />
      <div className="absolute bottom-[-5%] right-[20%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none float-ambient-slow mix-blend-screen" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <blockquote className="relative max-w-4xl mb-14 px-4 md:px-10 text-center">
            <span className="absolute -top-16 left-0 md:-left-4 text-accent/10 text-[120px] leading-none font-display">"</span>
            <p className="text-[clamp(1.8rem,4vw,2rem)] italic font-display font-light text-white/50 leading-tight">
              We didn&apos;t ask for comfort—only the gear to make it home.
            </p>
          </blockquote>

          {/* Icon */}
          <div className="relative w-20 h-20 flex items-center justify-center mb-10">
            <div className="absolute inset-0 bg-accent/25 rounded-full blur-2xl" />
            <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent to-[#B8852B] rounded-2xl shadow-[0_0_30px_rgba(229,178,93,0.35)]">
              <Heart className="w-8 h-8 text-white" fill="rgba(255,255,255,0.3)" />
            </div>
          </div>

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
              className="shimmer-btn w-full sm:w-auto bg-accent text-primary px-12 py-5 font-accent font-bold tracking-widest rounded-sm hover:bg-[#f2c777] transition-all shadow-[0_0_30px_rgba(229,178,93,0.35)] text-sm uppercase border border-[#d8a956]"
            >
              Donate via IsraelGives
            </a>
            <button
              type="button"
              className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white/50 font-accent font-bold tracking-widest rounded-sm transition-all text-sm uppercase backdrop-blur-sm cursor-not-allowed"
              title="Coming soon"
              aria-label="PayPal and Bit coming soon"
            >
              PayPal / Bit
            </button>
          </div>
          <p className="mt-6 text-xs text-white/35 font-accent tracking-[0.22em] uppercase">
            Tax-deductible · All funds go directly to soldiers
          </p>
        </motion.div>
      </div>
    </section>
  );
}
