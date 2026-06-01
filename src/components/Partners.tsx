import { motion } from 'motion/react';

export function Partners() {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden md:[clip-path:polygon(0_0,100%_0,100%_100%,0_88%)]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14"
        >
          <div className="w-44 opacity-75 mix-blend-multiply hover:opacity-100 transition-opacity duration-300">
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              alt="The Ari Fuld Project"
              className="w-full h-auto"
            />
          </div>
          <div className="w-px h-12 bg-primary/15 hidden md:block" />
          <div className="text-center md:text-left text-primary/80 font-body">
            <h3 className="font-display font-bold text-xl mb-2 text-primary italic">Kadima Concierge operates under The Ari Fuld Project</h3>
            <p className="text-sm text-primary/60">Registered Amuta (NGO) in Israel – ID# 580672897 (with Tofes 46)</p>
            <p className="text-sm text-primary/60">Registered 501(c)(3) charity in the US – EIN: 83-3571366</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
