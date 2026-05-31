import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white/80 border-t border-accent/15 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[200px] bg-accent-bright/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-14">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl font-display font-black text-white mb-2 italic drop-shadow-md">
              KADIMA <span className="font-artistic text-accent-bright lowercase text-4xl">Concierge</span>
            </h3>
            <p className="text-white/45 font-body max-w-xs text-sm leading-relaxed">
              Supporting IDF soldiers with essential tactical gear, nutrition, and wellness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 text-white/55 text-sm font-body"
          >
            <p>
              <strong className="text-accent uppercase font-accent text-[10px] tracking-widest mr-2">Website:</strong>
              <a href="https://arifuld.org/kadima-concierge" className="hover:text-accent-bright transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                arifuld.org/kadima-concierge
              </a>
            </p>
            <p>
              <strong className="text-accent uppercase font-accent text-[10px] tracking-widest mr-2">Address:</strong>
              Zeit Shemen 30/1, Efrat, Gush Etzion, Israel
            </p>
            <div className="flex items-center gap-5 pt-5 border-t border-white/8 mt-4">
              {[
                { label: 'Facebook', href: 'https://facebook.com/TheAriFuldProject' },
                { label: 'X', href: 'https://x.com/arifuldproject' },
                { label: 'Instagram', href: 'https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-bright transition-colors duration-300 font-accent text-xs uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-accent uppercase tracking-widest font-bold text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span>Israel ID #580672897</span>
            <span>US EIN 83-3571366</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/45">The Ari Fuld Project</span>
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              className="h-9 opacity-40 hover:opacity-80 transition-opacity duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              alt="Ari Fuld Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
