import { animate } from 'motion';
import { useInView, motion } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      onUpdate: (value) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${Math.floor(value).toLocaleString()}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, to, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const stats = [
  { label: 'Soldiers Supported', value: 1000, suffix: '+' },
  { label: 'Helmets Delivered', value: 500, suffix: '+' },
  { label: 'Communities Reached', value: 50, suffix: '+' },
  { label: 'Mission Started', value: 2023, suffix: '' },
];

export function Stats() {
  return (
    <section className="section bg-bg-light">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow">Impact at a glance</p>
          <h2 className="heading-lg">Transparent outcomes, measurable support</h2>
        </div>

        <div className="grid-auto">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="surface-card min-h-[170px] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.09em] text-primary/60">{stat.label}</p>
              <p className="mt-2 text-5xl font-bold leading-none text-primary">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
