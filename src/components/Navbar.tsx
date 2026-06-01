import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/about', label: 'Our Mission' },
  { href: '/helmets', label: 'Helmets' },
  { href: '/join', label: 'Join Us' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-light/96 border-b border-primary/10 shadow-[0_8px_22px_rgba(24,18,37,0.08)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex items-center gap-3 rounded-md"
          aria-label="Kadima Concierge home"
        >
          <img
            src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
            alt="Kadima Concierge"
            className={`h-12 w-auto object-contain transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
            loading="eager"
            decoding="async"
          />
          <span className={`hidden text-sm font-semibold sm:inline ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Kadima Concierge
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? 'page' : undefined}
                className={`navbar-link ${
                  active
                    ? 'bg-primary text-white'
                    : isScrolled
                      ? 'text-primary/70 hover:text-primary hover:bg-primary/6'
                      : 'text-white/85 hover:text-white hover:bg-white/12'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/donate"
            aria-current={pathname === '/donate' ? 'page' : undefined}
            className="btn-base btn-primary ml-2"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md md:hidden ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-primary/10 bg-bg-light/98 px-4 pb-5 pt-3 shadow-[0_16px_30px_rgba(24,18,37,0.12)] md:hidden"
          >
            <div className="container-shell flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                    className={`min-h-[46px] rounded-md px-3 py-3 text-base font-semibold ${
                      active ? 'bg-primary text-white' : 'text-primary/85 hover:bg-primary/6'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link to="/donate" onClick={closeMenu} className="btn-base btn-primary mt-1 w-full">
                Donate now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
