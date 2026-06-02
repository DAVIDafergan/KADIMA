import { motion } from 'motion/react';

export function Partners() {
  return (
    <section className="bg-[#fdfbf7] py-14 md:py-18">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_16px_42px_rgba(24,18,37,0.08)] md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="heading-eyebrow">Partners</p>
              <h3 className="heading-lg text-3xl">Trusted governance. Verified delivery.</h3>
              <p className="mt-2 text-sm text-muted">
                Kadima Concierge operates under The Ari Fuld Project, ensuring compliant and transparent humanitarian support.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <article className="rounded-2xl border border-primary/10 bg-bg-light p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary/70">Israel</p>
                <p className="mt-1 text-sm font-semibold text-primary">Amuta 580672897</p>
              </article>
              <article className="rounded-2xl border border-primary/10 bg-bg-light p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary/70">United States</p>
                <p className="mt-1 text-sm font-semibold text-primary">501(c)(3) · EIN 83-3571366</p>
              </article>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
