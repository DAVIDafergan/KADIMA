import { motion } from 'motion/react';
import { ShieldCheck, Utensils, HeartPulse, HardHat } from 'lucide-react';

const impactAreas = [
  {
    title: "Tactical Gear",
    description: "Procuring and delivering essential military equipment to IDF troops in active service.",
    icon: ShieldCheck
  },
  {
    title: "Meals & Nutrition",
    description: "Providing hot meals and vital nutrition to soldiers deployed in the field.",
    icon: Utensils
  },
  {
    title: "Sports & Wellness",
    description: "Organizing sports equipment donations and wellness events to support morale and physical health.",
    icon: HeartPulse
  },
  {
    title: "Helmets 4 Chayalim",
    description: "Unique artistic helmets decorated by survivors and artists, each carrying a story of heroism.",
    icon: HardHat
  }
];

export function WhatWeDo() {
  return (
    <section id="impact" className="py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Subtle luxury ambient glow & colorful splashes */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-bright/50 to-transparent"></div>
      
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none float-medium block" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-accent-bright/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none float-slow block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-bright/5 font-artistic text-[120px] whitespace-nowrap pointer-events-none select-none blur-sm z-0 hidden md:block">Impact</div>
          <h4 className="font-accent text-accent-bright text-xs font-bold tracking-[0.3em] uppercase mb-4 relative z-10">Core Mission</h4>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 italic relative z-10 drop-shadow-lg">What We <span className="font-artistic text-accent text-5xl md:text-7xl lowercase drop-shadow-md transform -rotate-2 inline-block">Do</span></h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-accent-bright to-transparent mx-auto relative z-10"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex flex-col items-center text-center shadow-xl transform-gpu transition-all duration-500 hover:-translate-y-2 hover:border-accent-bright/50 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(247,37,133,0.15)] group rounded-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-accent-bright mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10 drop-shadow-md">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="font-accent font-bold uppercase tracking-wider text-white mb-3 relative z-10">{area.title}</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed relative z-10">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
