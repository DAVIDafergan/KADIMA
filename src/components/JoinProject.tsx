import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Sparkles, Heart, Shield, Paintbrush } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function JoinProject() {
  const navigate = useNavigate();
  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <article className="pt-10 pb-20 dynamic-luxury-bg bg-[var(--color-bg-dark)] min-h-screen relative text-white w-full">
      {/* Artistic Floating Splashes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-bright/10 rounded-full blur-[120px] pointer-events-none float-slow mix-blend-screen" />
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#3A0CA3]/20 rounded-full blur-[150px] pointer-events-none float-medium mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-accent/10 rounded-full blur-[100px] pointer-events-none float-fast mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col gap-6">
        
        {/* Header & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-white/10 pb-6">
          <motion.button 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 text-white/50 hover:text-accent-bright font-accent uppercase text-xs tracking-widest transition-colors group mb-8 md:mb-0"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Back to Home
          </motion.button>
          
          <div className="text-left md:text-right">
            <h4 className="font-accent text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs font-semibold mb-2">The Initiative</h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light italic leading-none drop-shadow-md">
              Helmets 4 <span className="font-artistic text-accent-bright text-5xl sm:text-6xl md:text-7xl lowercase transform -rotate-2 inline-block">Chayalim</span>
            </h1>
          </div>
        </div>

        {/* Bento Layout Grid */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto"
        >
          {/* Main Hero Card (span 2x2) */}
          <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-accent-bright/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(247,37,133,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-bright/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-tight text-white mb-6 relative z-10">
              "There are wars we see.<br/>
              <span className="font-medium">And there are wars we carry quietly within us.</span>"
            </h3>
            <p className="font-accent text-accent-bright tracking-[0.1em] uppercase text-xs md:text-sm font-semibold relative z-10 opacity-80 border-l-2 border-accent-bright pl-4">
              Helmets 4 Chayalim was born in the space between the two. Where stories become strength.
            </p>
          </motion.div>

          {/* The Object Card (1x1) */}
          <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
            <Shield className="w-8 h-8 text-accent/70 mb-4" />
            <p className="font-display text-xl text-white/90 font-light leading-relaxed">
              A simple object—<span className="font-medium text-accent">a helmet</span>.<br/>
              A symbol of protection, survival, and courage.
            </p>
          </motion.div>

          {/* The Object Continued (1x1) */}
          <motion.div variants={fadeUp} className="bg-accent-bright/10 backdrop-blur-md border border-accent-bright/20 p-8 rounded-3xl relative overflow-hidden flex items-center justify-center text-center group">
             <div className="absolute inset-0 bg-accent-bright/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
             <p className="font-artistic text-3xl text-white italic leading-tight relative z-10">
               "But when its time in the field is over, its story is not."
             </p>
          </motion.div>

          {/* The Transformation (Full width span in typical grid, here span 2 or 3) */}
          <motion.div variants={fadeUp} className="md:col-span-3 lg:col-span-2 bg-[#120A1A]/80 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden">
            <div className="flex items-start gap-6">
              <Paintbrush className="w-10 h-10 text-accent-bright/80 shrink-0" />
              <div>
                <p className="font-display text-2xl md:text-3xl font-light leading-relaxed mb-4">
                  Each helmet is placed into the hands of a storyteller. A soul with something to say. 
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    "Some carry the weight of loss.",
                    "Some the silence of trauma.",
                    "Quiet strength of rebuilding.",
                    "The fire of love for Israel."
                  ].map((text, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-display italic text-white/70">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Meaning Words Block */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 grid-rows-2 gap-3 lg:col-span-2">
            {['Color', 'Memory', 'Prayer', 'Healing'].map((word, i) => (
              <div key={word} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4 text-center hover:bg-white/10 transition-colors">
                <span className="font-accent uppercase tracking-widest text-[10px] text-white/40">It becomes</span>
                <span className="text-white text-2xl mt-1 font-artistic text-accent">{word}</span>
              </div>
            ))}
          </motion.div>

          {/* Passing It Forward (Full width) */}
          <motion.div variants={fadeUp} className="md:col-span-3 lg:col-span-4 bg-gradient-to-r from-accent/10 via-transparent to-accent-bright/10 border border-t-accent/20 border-b-accent-bright/20 border-x-transparent p-10 md:p-14 rounded-3xl text-center relative mt-4">
             <Heart className="w-12 h-12 text-accent-bright mx-auto mb-6 drop-shadow-[0_0_15px_rgba(247,37,133,0.5)]" />
             <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic mb-6 leading-tight">
               One helmet that once protected a life…<br/>
               <span className="font-medium text-accent">goes on to protect many more.</span>
             </p>
             <p className="font-body text-lg text-white/60 font-light max-w-2xl mx-auto">
               These helmets are not just displayed. They are shared. They are felt. They are passed forward to raise funds for real tactical gear for active soldiers.
             </p>
          </motion.div>
        </motion.div>

        {/* CTA Footer */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
        >
          <div>
            <h3 className="font-display text-2xl md:text-3xl italic font-light">That from protection can come purpose.</h3>
            <span className="font-accent uppercase tracking-widest text-[10px] text-white/50 block mt-2">Do you have a story to tell?</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-end">
            <a href="mailto:info@arifuld.org" className="bg-accent text-primary px-8 py-4 font-accent font-bold uppercase tracking-widest hover:scale-105 transition-all rounded-xl text-xs md:text-sm">Contact Us</a>
            <a href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-8 py-4 font-accent font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-xl text-xs md:text-sm flex items-center gap-2"><Instagram size={16}/> Message</a>
          </div>
        </motion.div>

      </div>
    </article>
  );
}
