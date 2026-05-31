import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ currentPage, setCurrentPage }: { currentPage: 'home' | 'join', setCurrentPage: (page: 'home' | 'join') => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  const linkBaseClass = "font-accent uppercase tracking-widest text-xs md:text-sm transition-all duration-300";
  const desktopLinkClass = `${linkBaseClass} text-primary/80 hover:text-accent font-semibold`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-bg-light/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(10,17,40,0.05)] border-b border-primary/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          <div 
            className="flex-shrink-0 cursor-pointer h-full relative flex items-center group"
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img 
               src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png" 
               alt="Kadima Logo" 
               className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] filter brightness-0 invert'}`}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
             {currentPage === 'join' ? (
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={isScrolled ? desktopLinkClass : desktopLinkClass.replace('text-primary/80', 'text-white drop-shadow-md')}>Back To Home</button>
             ) : (
                <>
                  <button onClick={() => handleNavClick('about')} className={isScrolled ? desktopLinkClass : desktopLinkClass.replace('text-primary/80', 'text-white drop-shadow-md')}>Our Mission</button>
                  <button onClick={() => handleNavClick('impact')} className={isScrolled ? desktopLinkClass : desktopLinkClass.replace('text-primary/80', 'text-white drop-shadow-md')}>What We Do</button>
                  <button onClick={() => handleNavClick('gallery')} className={isScrolled ? desktopLinkClass : desktopLinkClass.replace('text-primary/80', 'text-white drop-shadow-md')}>Gallery</button>
                </>
             )}
            
            <a 
              href="https://my.israelgives.org/en/fundme/kadima_concierge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-3 font-accent font-semibold tracking-widest rounded-sm hover:-translate-y-1 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 shadow-md text-xs uppercase"
            >
              DONATE NOW
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}>
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.17, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-[var(--color-bg-dark)] backdrop-blur-3xl text-white"
          >
            {/* Artistic Color Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[10%] -right-[10%] w-[300px] h-[300px] bg-accent/30 rounded-full blur-[80px] mix-blend-multiply" 
              />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-[40%] -left-[20%] w-[400px] h-[400px] bg-accent-bright/20 rounded-full blur-[100px] mix-blend-multiply" 
              />
               <motion.div 
                animate={{ scale: [1, 1.3, 1], y: [0, -50, 0] }} 
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[10%] w-[350px] h-[350px] bg-primary/20 rounded-full blur-[90px] mix-blend-multiply" 
              />
            </div>
            
            <div className="relative h-full flex flex-col justify-center px-8 z-10">
              <div className="flex flex-col space-y-8">
                {currentPage === 'join' ? (
                  <motion.button 
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                    onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} 
                    className="text-white text-5xl font-display italic text-left relative group w-fit"
                  >
                    <span className="relative z-10 group-hover:text-accent transition-colors">Back To Home</span>
                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-bright/20 -rotate-2 transform origin-left transition-all group-hover:bg-accent-bright/40" />
                  </motion.button>
                ) : (
                  <>
                    {[
                      { id: 'about', label: 'Our Mission' },
                      { id: 'impact', label: 'What We Do' },
                      { id: 'gallery', label: 'Gallery' }
                    ].map((item, index) => (
                      <motion.button 
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.1 + index * 0.1 }}
                        onClick={() => handleNavClick(item.id)} 
                        className="text-white text-5xl md:text-6xl font-display italic text-left relative group w-fit"
                      >
                        <span className="relative z-10 group-hover:text-accent transition-colors">{item.label}</span>
                        <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-bright/20 -rotate-1 transform origin-left transition-all group-hover:bg-accent-bright/40 group-hover:-rotate-3" />
                      </motion.button>
                    ))}
                  </>
                )}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4 }}
                className="mt-16 w-full"
              >
                <a 
                  href="https://my.israelgives.org/en/fundme/kadima_concierge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-accent-bright text-white py-6 font-accent font-bold tracking-[0.2em] uppercase text-sm relative overflow-hidden group shadow-[0_20px_40px_rgba(247,37,133,0.2)]"
                >
                  <span className="relative z-10 group-hover:text-accent transition-colors duration-300">Donate Now</span>
                  <div className="absolute inset-0 bg-accent-bright transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
