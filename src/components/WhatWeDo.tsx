import { motion } from 'motion/react';
import { HeartPulse, ShieldCheck, Utensils } from 'lucide-react';

const impactAreas = [
  {
    title: 'Protect',
    description: 'Fast procurement of life-saving tactical gear for active units.',
    icon: ShieldCheck,
  },
  {
    title: 'Sustain',
    description: 'Meals and essentials delivered directly to soldiers in the field.',
    icon: Utensils,
  },
  {
    title: 'Strengthen',
    description: 'Wellness and resilience support for soldiers and communities.',
    icon: HeartPulse,
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-[#fdfbf7] py-14 md:py-18">
      <div className="container-shell">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="heading-eyebrow">How we help</p>
          <h2 className="heading-lg">Three focused paths. One mission.</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {impactAreas.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card p-5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/7 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
