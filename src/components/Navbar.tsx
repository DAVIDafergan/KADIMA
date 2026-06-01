import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Mission' },
  { href: '/helmets', label: 'Helmets' },
  { href: '/gallery', label: 'Gallery' },
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

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-light/96 border-b border-primary/10 shadow-[0_8px_22px_rgba(24,18,37,0.08)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-shell relative flex h-20 items-center justify-between md:h-24" aria-label="Main navigation">
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex items-center gap-3.5 rounded-full"
          aria-label="Kadima Concierge home"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/60 bg-gradient-to-br from-white via-bg-light to-amber-50 p-1.5 shadow-[0_10px_24px_rgba(24,18,37,0.18)] ring-2 ring-white/85">
            <img
              src="https://github.com/user-attachments/assets/3e627728-3898-4039-9828-2692920556ab"
              alt="Kadima Concierge"
              className="h-full w-full rounded-full object-cover"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className={`hidden text-sm font-semibold tracking-wide lg:inline ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Kadima Concierge
          </span>
        </Link>

        <div
          className={`hidden items-center gap-2 rounded-full border px-4 py-2.5 shadow-md md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 ${
            isScrolled
              ? 'border-primary/12 bg-white/88 backdrop-blur'
              : 'border-white/30 bg-primary/24 backdrop-blur-md'
          }`}
        >
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
            className="btn-base btn-primary ml-2 whitespace-nowrap"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex min-h-[46px] min-w-[46px] items-center justify-center rounded-full border md:hidden ${
            isScrolled
              ? 'border-primary/15 bg-white/90 text-primary shadow-sm'
              : 'border-white/45 bg-primary/35 text-white backdrop-blur'
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
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary/35 backdrop-blur-[2px] md:hidden"
              onClick={closeMenu}
              aria-label="Close mobile menu backdrop"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 border-t border-primary/10 bg-bg-light/98 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_16px_30px_rgba(24,18,37,0.12)] md:hidden"
            >
              <div className="container-shell rounded-2xl border border-primary/10 bg-white/90 p-3 shadow-sm">
                <div className="mb-2 flex items-center gap-3 rounded-xl bg-primary/[0.03] p-2.5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-gradient-to-br from-white via-bg-light to-amber-50 p-1 shadow-sm">
                    <img
                      src="https://github.com/user-attachments/assets/3e627728-3898-4039-9828-2692920556ab"
                      alt="Kadima Concierge"
                      className="h-full w-full rounded-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-primary">Kadima Concierge</span>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={closeMenu}
                        aria-current={active ? 'page' : undefined}
                        className={`min-h-[50px] rounded-xl px-4 py-3 text-base font-semibold ${
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
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
