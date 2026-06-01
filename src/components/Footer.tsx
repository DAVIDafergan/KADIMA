import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

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
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h5 className="font-accent uppercase tracking-widest text-xs text-white/40 mb-4">Navigate</h5>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Our Mission', href: '/about' },
                  { label: 'Helmets 4 Chayalim', href: '/helmets' },
                  { label: 'Join the Project', href: '/join' },
                  { label: 'Donate', href: '/donate' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/50 hover:text-accent text-sm font-light transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-accent uppercase tracking-widest text-xs text-white/40 mb-4">Project</h5>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Kadima Concierge operates under The Ari Fuld Project in Israel and the US.
              </p>
            </div>

            <div>
              <h5 className="font-accent uppercase tracking-widest text-xs text-white/40 mb-4">Social</h5>
              <div className="space-y-2">
                {[
                  { label: 'Facebook', href: 'https://facebook.com/TheAriFuldProject' },
                  { label: 'X', href: 'https://x.com/arifuldproject' },
                  { label: 'Instagram', href: 'https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/50 hover:text-accent text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <img
                src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
                alt="Kadima Concierge"
                className="h-14 w-auto mx-auto md:ml-auto brightness-0 invert opacity-85"
              />
            </div>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/8 text-center text-white/25 text-xs font-accent tracking-widest">
          © {new Date().getFullYear()} Kadima Concierge · The Ari Fuld Project
        </div>
      </div>
    </footer>
  );
}
