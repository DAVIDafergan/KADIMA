import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const trustPoints = [
  { icon: ShieldCheck, label: 'Life-saving protective gear' },
  { icon: Truck, label: 'Direct field delivery' },
  { icon: Users, label: 'Backed by global community donors' },
];

export function Hero() {
  return (
    <section className="section-dark relative overflow-hidden pt-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -16, 0], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-28 h-64 w-64 rounded-full bg-[#8f6ac6]/18 blur-3xl"
        animate={{ y: [0, 18, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg"
          alt=""
          className="h-full w-full object-cover opacity-18"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b18]/70 via-[#0f0b18]/80 to-[#0f0b18]" />
      </div>

      <div className="container-shell section relative z-10">
        <div className="max-w-3xl">
          <motion.p
            className="heading-eyebrow text-accent"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Kadima Concierge · Since Oct 7, 2023
          </motion.p>
          <motion.h1
            className="heading-xl text-white"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Delivering critical protection and support to IDF soldiers—fast, reliably, and with dignity.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-muted-dark"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We fund and deliver tactical gear, emergency supplies, and wellness support for soldiers and communities across Israel.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary w-full sm:w-auto"
            >
              Donate now
            </a>
            <Link to="/about" className="btn-base btn-secondary w-full sm:w-auto">
              Learn our mission <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            className="mt-9 grid gap-3 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.38 } },
            }}
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="surface-card-dark flex min-h-[84px] items-start gap-3 p-4"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm text-muted-dark">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-auto mb-3 mt-2 h-10 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
      <motion.p
        className="pb-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent/70"
        animate={{ opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        Scroll to discover
      </motion.p>
    </section>
  );
}
