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
          <p className="heading-eyebrow text-accent">Kadima Concierge · Since Oct 7, 2023</p>
          <h1 className="heading-xl text-white">
            Delivering critical protection and support to IDF soldiers—fast, reliably, and with dignity.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-dark">
            We fund and deliver tactical gear, emergency supplies, and wellness support for soldiers and communities across Israel.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="surface-card-dark flex min-h-[84px] items-start gap-3 p-4">
                <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-sm text-muted-dark">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="mx-auto mb-6 h-10 w-[1px] bg-gradient-to-b from-transparent via-accent to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
    </section>
  );
}
