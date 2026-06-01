import { motion } from 'motion/react';
import { ShieldCheck, Utensils, HeartPulse, HardHat } from 'lucide-react';

const impactAreas = [
  {
    title: "Tactical Gear",
    description: "Procuring and delivering essential military equipment to IDF troops in active service.",
    icon: ShieldCheck,
    glow: "rgba(229,178,93,0.35)",
    iconColor: "text-accent",
    borderFrom: "#E5B25D",
    borderTo: "#B8852B",
  },
  {
    title: "Meals & Nutrition",
    description: "Providing hot meals and vital nutrition to soldiers deployed in the field.",
    icon: Utensils,
    glow: "rgba(247,37,133,0.35)",
    iconColor: "text-accent-bright",
    borderFrom: "#F72585",
    borderTo: "#B5179E",
  },
  {
    title: "Sports & Wellness",
    description: "Organizing sports equipment donations and wellness events to support morale and physical health.",
    icon: HeartPulse,
    glow: "rgba(76,201,240,0.35)",
    iconColor: "text-electric",
    borderFrom: "#4CC9F0",
    borderTo: "#4361EE",
  },
  {
    title: "Helmets 4 Chayalim",
    description: "Unique artistic helmets decorated by survivors and artists, each carrying a story of heroism.",
    icon: HardHat,
    glow: "rgba(123,47,190,0.35)",
    iconColor: "text-violet",
    borderFrom: "#C77DFF",
    borderTo: "#7B2FBE",
  }
];

export function WhatWeDo() {
  return (
    <section id="impact" className="py-24 bg-[var(--color-bg-dark)] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-bright/50 to-transparent" />

      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none float-medium" />
      <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-accent-bright/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none float-slow" />
      <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-electric/8 rounded-full blur-[100px] mix-blend-screen pointer-events-none float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-bright/5 font-artistic text-[120px] whitespace-nowrap pointer-events-none select-none blur-sm z-0 hidden md:block">Impact</div>
          <h4 className="font-accent text-accent-bright text-xs font-bold tracking-[0.3em] uppercase mb-4 relative z-10">Core Mission</h4>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 italic relative z-10 drop-shadow-lg">
            What We <span className="font-artistic text-accent text-5xl md:text-7xl lowercase drop-shadow-md transform -rotate-2 inline-block">Do</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-accent-bright to-transparent mx-auto relative z-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1], type: 'spring', stiffness: 300, damping: 20 }}
                className="relative group"
                style={{ padding: '1px', borderRadius: '1rem', background: `linear-gradient(135deg, ${area.borderFrom}22, ${area.borderTo}22)` }}
              >
                {/* Animated gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${area.borderFrom}55, ${area.borderTo}44)`, borderRadius: '1rem' }}
                />

                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center h-full transition-all duration-500 group-hover:bg-white/10">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
                      style={{ background: area.glow }}
                    />
                    <div className={`relative ${area.iconColor} transform transition-all duration-500 group-hover:scale-115 group-hover:rotate-6 drop-shadow-md`}>
                      <Icon size={48} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-accent font-bold uppercase tracking-wider text-white mb-3 relative z-10">{area.title}</h3>
                  <p className="text-sm text-white/65 font-light leading-relaxed relative z-10">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
