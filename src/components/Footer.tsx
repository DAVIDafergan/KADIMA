import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-bg-dark text-white/75 relative overflow-hidden py-16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
        >
          <div className="text-center md:text-left">
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              alt="Kadima Concierge"
              className="h-14 w-auto mx-auto md:mx-0 brightness-0 invert opacity-85"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'Mission', href: '#about' },
              { label: 'Impact', href: '#impact' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Donate', href: '#donate' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/45 hover:text-accent transition-colors text-xs tracking-[0.12em] uppercase font-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center md:justify-end gap-5">
            {[
              { label: 'Facebook', href: 'https://facebook.com/TheAriFuldProject' },
              { label: 'X', href: 'https://x.com/arifuldproject' },
              { label: 'Instagram', href: 'https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 hover:text-accent transition-colors font-accent text-xs tracking-[0.14em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 pt-8 border-t border-white/8 text-center text-white/25 text-xs font-accent tracking-widest">
          © {new Date().getFullYear()} Kadima Concierge · The Ari Fuld Project
        </div>
      </div>
    </footer>
  );
}
