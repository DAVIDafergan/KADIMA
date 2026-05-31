import { motion } from 'motion/react';

const images = [
  "https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/e2e6e639-c346-4777-ba88-12d6762b4bff.jpg",
  "https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/fc87f054-9d68-4674-897d-594ef9dab64a.jpg",
  "https://my.israelgives.org/AppImages/fundpage/original/kadima_concierge/6f7be831-c756-4be2-a422-88d00dff0129.jpg"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 dynamic-luxury-bg relative overflow-hidden text-white border-b border-white/5 bg-[var(--color-bg-dark)]">
      
      {/* Background ambient lighting & colorful artistic splashes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-accent-bright/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen float-fast" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#3A0CA3]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/5 font-artistic text-[150px] md:text-[200px] whitespace-nowrap pointer-events-none select-none blur-[2px] z-0">Gallery</div>
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 italic tracking-wide drop-shadow-xl">
              The <span className="font-artistic text-accent-bright text-6xl md:text-8xl lowercase drop-shadow-md transform -rotate-2 inline-block">Helmets</span> Collection
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 font-body text-xl font-light tracking-wide max-w-2xl mx-auto"
          >
            From procurement to delivery – every item tells a story of heroism and light.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8 origin-center"
          />
        </div>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
              }
            }
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: 200, scale: 0.9, rotateY: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  rotateY: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 60, 
                    damping: 15,
                    mass: 1.2
                  }
                }
              }}
              className="relative w-full md:w-1/3 aspect-[4/5] group perspective-1000"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(200,169,110,0.25)] bg-transparent">
                
                {/* Glow behind the image */}
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0" />
                
                <img 
                  src={src} 
                  alt={`Helmet ${i+1}`} 
                  className="relative z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
                />

                {/* Soft vignette and border over the image */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#05080f]/90 via-[#05080f]/20 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-colors duration-700 z-30 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
