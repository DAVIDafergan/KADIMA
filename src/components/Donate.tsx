import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Donate() {
  return (
    <section className="py-24 navy-gradient text-white text-center relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-accent rounded text-primary mb-8">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4 italic">Join the <span className="text-accent not-italic">Mission</span></h2>
          <p className="text-lg md:text-xl font-light italic text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every donation directly supports IDF soldiers with life-saving gear and essential supplies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href="https://my.israelgives.org/en/fundme/kadima_concierge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent-bright text-white px-10 py-5 font-accent font-semibold tracking-widest rounded-sm hover:scale-105 active:scale-95 transition-all shadow-lg text-lg uppercase"
            >
              Donate via IsraelGives
            </a>
            <a 
              href="https://my.israelgives.org/en/fundme/kadima_concierge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white hover:bg-white/5 font-accent font-semibold tracking-widest rounded-sm transition-all shadow-lg text-lg uppercase"
            >
              PayPal / Bit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
