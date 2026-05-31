import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Helmets({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'join') => void }) {
  return (
    <section className="py-32 dynamic-luxury-bg text-white overflow-hidden relative border-t border-b border-accent/20">
      {/* Radiant glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/15 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h4 className="font-accent text-accent uppercase tracking-[0.4em] text-sm mb-6 font-bold">The Highlight Initiative</h4>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
            Helmets 4 <span className="text-accent italic font-light">Chayalim</span>
          </h2>
          
          <h3 className="text-xl md:text-3xl font-display text-white/80 italic tracking-wide mb-10">
            Where Stories Become Strength.
          </h3>
          
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mb-12"></div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl text-white/90 font-display font-light leading-relaxed text-balance italic max-w-3xl mb-16"
        >
          "There are wars we see.<br className="hidden md:block" />
          And there are wars we carry quietly within us.<br className="hidden md:block" />
          <strong className="text-accent font-semibold not-italic mt-4 block">Helmets 4 Chayalim was born in the space between the two.</strong>"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            onClick={() => setCurrentPage('join')}
            className="flex items-center gap-4 bg-transparent border border-accent/50 hover:bg-accent hover:text-[#05080f] text-accent px-10 py-5 font-accent font-bold uppercase tracking-widest rounded-sm active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(200,169,110,0.1)] hover:shadow-[0_0_40px_rgba(200,169,110,0.4)] group overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-3">
              Read the Full Story <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
