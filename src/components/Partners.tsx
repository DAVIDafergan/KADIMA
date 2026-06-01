import { motion } from 'motion/react';

export function Partners() {
  return (
    <section className="section bg-bg-light">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="surface-card flex flex-col items-center gap-6 p-8 text-center md:flex-row md:justify-between md:text-left"
        >
          <div className="max-w-lg">
            <p className="heading-eyebrow">Trust & compliance</p>
            <h3 className="heading-lg text-3xl">Operated under The Ari Fuld Project</h3>
            <p className="mt-2 text-muted">Registered Amuta (Israel): 580672897 · Registered US 501(c)(3): EIN 83-3571366</p>
          </div>
          <img
            src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
            alt="The Ari Fuld Project"
            className="h-16 w-auto"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
