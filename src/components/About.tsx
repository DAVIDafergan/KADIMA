import { motion } from 'motion/react';
import { Instagram, Star } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-44 dynamic-luxury-bg relative overflow-hidden bg-[var(--color-bg-dark)] [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)]">
      {/* Background elegant lighting & artistic color splashes */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen pointer-events-none"></div>
      
      {/* Abstract Colorful Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-accent/6 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/3 font-artistic text-[220px] whitespace-nowrap pointer-events-none select-none z-0">Our Story</div>
            <h4 className="font-accent text-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center relative z-10">Our Story & Founder</h4>
            <div className="flex items-center justify-center relative z-10">
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-accent-bright"></div>
              <h2 className="mx-6 md:mx-8 text-5xl md:text-6xl font-display font-black text-white uppercase tracking-widest italic text-center drop-shadow-lg">
                The <span className="font-artistic text-accent-bright text-6xl md:text-7xl lowercase drop-shadow-md transform -rotate-3 inline-block">Mission</span>
              </h2>
              <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-accent-bright to-transparent"></div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Founder Bio */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden group hover:border-accent/30 transition-colors duration-700">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <Star className="w-24 h-24 text-accent" strokeWidth={0.5} />
                </div>
                
                {/* Special Profile Image Design */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 mx-auto xl:mx-0">
                  <div className="absolute inset-[-12px] border border-accent/20 rounded-[28px]" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-colors duration-700" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-2 border-accent/40 overflow-hidden shadow-[0_0_30px_rgba(200,169,110,0.2)] group-hover:border-accent/80 transition-all duration-700 bg-[#0d1520]/50">
                    <img 
                      src="/seagal-profile.jpg" 
                      alt="Seagal Hagege" 
                      className="w-full h-full object-cover filter grayscale-[100%] group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {/* Inner Shadow Overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-4 text-center xl:text-left">Seagal Hagege</h3>
                <p className="text-lg text-white/70 font-light leading-relaxed mb-8 text-center xl:text-left">
                  An American-Israeli community activist, fundraiser, and social entrepreneur based in Israel. She founded Kadima Concierge, a grassroots initiative that helps provide protective equipment and essential supplies to Israeli soldiers and communities affected by the war.
                </p>
                <div className="flex justify-center xl:justify-start">
                  <a 
                    href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-[#a68b55] text-[#1a2744] font-accent font-semibold uppercase tracking-widest text-sm rounded-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(200,169,110,0.3)]"
                  >
                    <Instagram size={18} />
                    Follow on Instagram
                  </a>
                </div>
              </div>

              <motion.div variants={itemVariants} className="px-2">
                <h3 className="text-2xl font-display font-bold text-accent mb-3">Public Recognition</h3>
                <p className="text-white/70 font-light leading-relaxed text-lg">
                  The project has been featured through exhibitions, community events, social media campaigns, and media coverage. Seagal Hagege is proudly recognized for building a volunteer-driven movement that fundamentally combines direct support for soldiers with healing and community-building through art.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column: Project Details */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-12">
              
              <div>
                <h3 className="text-2xl font-display font-bold text-accent mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent"></span>
                  What is Kadima Concierge?
                </h3>
                <p className="text-xl text-white/80 font-light leading-relaxed">
                  Kadima Concierge is a community-based fundraising and logistics initiative. The project connects donors in Israel and abroad with soldiers and units that need equipment and support. Its mission is to respond quickly to needs on the ground while building community involvement and solidarity.
                </p>
                <p className="text-lg text-white/60 font-light leading-relaxed mt-4">
                  Operating under The Ari Fuld Project, it focuses on raising funds for helmets, protective vests, ceramic plates, boots, uniforms, protective eyewear, and other critical gear.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-accent mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent"></span>
                  What is Helmets 4 Chayalim?
                </h3>
                <p className="text-xl text-white/80 font-light leading-relaxed mb-6">
                  Growing out of the Kadima Concierge effort, this project takes retired or damaged military helmets and transforms them into works of art created by volunteer artists. The completed helmets are displayed at exhibitions and community events, with proceeds helping fund new protective equipment for soldiers.
                </p>

                <blockquote className="text-2xl font-display font-light italic text-white/60 border-l-2 border-accent pl-6 py-2 my-8">
                  “What we send is protection—but what we build is solidarity.”
                </blockquote>
                
                <div className="bg-[#0d1520]/80 border border-white/5 p-8 rounded-xl shadow-inner">
                  <h4 className="font-accent text-white uppercase tracking-widest text-sm mb-6 opacity-80">The Initiative Combines:</h4>
                  <ul className="space-y-4">
                    {[
                      "Art and healing",
                      "Community engagement",
                      "Support for Israeli soldiers",
                      "Storytelling through creative expression",
                      "Fundraising for life-saving protective gear"
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        variants={listItemVariants}
                        className="flex items-start gap-4 text-white/90 text-lg font-light"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">
                          <Star size={16} className="fill-accent/20" />
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
