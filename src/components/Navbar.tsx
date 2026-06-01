import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'Our Mission' },
  { href: '/helmets', label: 'Helmets' },
  { href: '/join', label: 'Join Us' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  return (
    <nav
      role="navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-bg-light/85 border-b border-primary/10 shadow-[0_10px_24px_rgba(18,10,26,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 h-full flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              alt="Kadima Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? 'h-12 md:h-14'
                  : 'h-14 md:h-16 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] brightness-0 invert'
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              const desktopText = isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/60 hover:text-white/90';
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`navbar-link uppercase tracking-[0.08em] text-xs font-light transition-colors after:scale-x-0 ${desktopText} ${isActive ? 'text-accent after:scale-x-100' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              to="/donate"
              className={`px-6 py-2.5 font-accent font-semibold tracking-[0.18em] rounded-sm transition-all duration-700 text-[11px] uppercase border ${
                location.pathname === '/donate'
                  ? 'bg-accent text-primary border-[#d8a956]'
                  : isScrolled
                    ? 'bg-accent text-primary border-[#d8a956] hover:bg-[#f1c36f]'
                    : 'bg-transparent text-white border-white/35 hover:border-accent/60 hover:text-accent'
              }`}
              aria-current={location.pathname === '/donate' ? 'page' : undefined}
            >
              DONATE
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`${isScrolled ? 'text-primary' : 'text-white'} transition-colors`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 md:hidden bg-[var(--color-bg-dark)]/95 backdrop-blur-2xl text-white z-[60]"
          >
            <div className="h-full px-6 pt-8 pb-10 flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xs uppercase tracking-[0.35em] text-accent/70 font-accent">
                  Kadima
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="text-white/80 hover:text-accent transition-colors">
                  <X size={32} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-6">
                {[...navLinks, { href: '/donate', label: 'Donate' }].map((item, idx) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <div key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center gap-4 text-4xl font-display ${isActive ? 'text-accent' : 'text-white/80'}`}
                      >
                        <span className="font-accent text-xs tracking-[0.3em] text-white/35">{String(idx + 1).padStart(2, '0')}</span>
                        <span>{item.label}</span>
                      </Link>
                      <div className="h-px mt-4 bg-gradient-to-r from-accent/40 via-white/20 to-transparent" />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
