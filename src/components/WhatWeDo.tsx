import { HeartPulse, HardHat, ShieldCheck, Utensils } from 'lucide-react';

const impactAreas = [
  {
    title: 'Tactical Gear',
    description: 'Procurement and delivery of life-saving military equipment for active IDF units.',
    icon: ShieldCheck,
  },
  {
    title: 'Meals & Nutrition',
    description: 'Hot meals and nutrition support for soldiers deployed in the field.',
    icon: Utensils,
  },
  {
    title: 'Wellness Support',
    description: 'Sports and wellbeing support to sustain morale and long-term resilience.',
    icon: HeartPulse,
  },
  {
    title: 'Helmets 4 Chayalim',
    description: 'Art exhibitions and storytelling that fund new protective equipment.',
    icon: HardHat,
  },
];

export function WhatWeDo() {
  return (
    <section className="section bg-bg-light">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow">Core mission</p>
          <h2 className="heading-lg">Focused initiatives with direct impact</h2>
          <p className="mt-3 text-muted">Each activity is designed to remove friction between donor support and field delivery.</p>
        </div>

        <div className="grid-auto">
          {impactAreas.map(({ title, description, icon: Icon }) => (
            <article key={title} className="surface-card min-h-[220px] p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/6 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
