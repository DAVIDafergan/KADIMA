import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ currentPage, setCurrentPage }: { currentPage: 'home' | 'join', setCurrentPage: (page: 'home' | 'join') => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30);
  });

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 88, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 88, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'Our Mission' },
    { id: 'impact', label: 'What We Do' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const desktopText = isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/60 hover:text-white/90';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-bg-light/80 backdrop-blur-2xl border-b border-primary/10 shadow-[0_10px_24px_rgba(18,10,26,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            className="flex-shrink-0 h-full flex items-center"
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              alt="Kadima Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? 'h-12 md:h-14'
                  : 'h-14 md:h-16 drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] brightness-0 invert'
              }`}
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {currentPage === 'join' ? (
              <button
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`uppercase tracking-[0.1em] text-xs font-light transition-colors ${desktopText}`}
              >
                Back To Home
              </button>
            ) : (
              navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                    className={`navbar-link uppercase tracking-[0.08em] text-xs font-light transition-colors ${desktopText}`}
                >
                  {item.label}
                </button>
              ))
            )}

            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 font-accent font-semibold tracking-[0.18em] rounded-sm transition-all duration-700 text-[11px] uppercase border ${
                isScrolled
                  ? 'bg-accent text-primary border-[#d8a956] hover:bg-[#f1c36f]'
                  : 'bg-transparent text-white border-white/35 hover:border-accent/60 hover:text-accent'
              }`}
            >
              DONATE NOW
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[var(--color-bg-dark)] border-t border-white/10 text-white"
          >
            <div className="px-6 py-8 space-y-5">
              {currentPage === 'join' ? (
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block w-full text-left font-display text-3xl"
                >
                  Back To Home
                </button>
              ) : (
                navLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left font-display text-3xl"
                  >
                    {item.label}
                  </button>
                ))
              )}

              <a
                href="https://my.israelgives.org/en/fundme/kadima_concierge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-accent text-primary py-4 font-accent font-bold tracking-[0.16em] uppercase text-xs rounded-sm mt-3"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
