import { animate } from 'motion';
import { motion, useInView } from 'motion/react';
import { Boxes, ShieldCheck, Truck, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const controls = animate(0, to, {
      duration: 1.6,
      onUpdate: (value) => {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${Math.floor(value).toLocaleString()}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, suffix, to]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const stats = [
  { label: 'Soldiers supported', value: 1000, suffix: '+', icon: Users },
  { label: 'Equipment delivered', value: 500, suffix: '+', icon: Truck },
  { label: 'Active projects', value: 12, suffix: '', icon: Boxes },
  { label: 'Communities helped', value: 50, suffix: '+', icon: ShieldCheck },
];

export function Stats() {
  return (
    <section className="bg-[#f7f4ed] py-14 md:py-18">
      <div className="container-shell">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="heading-eyebrow">Impact snapshot</p>
          <h2 className="heading-lg">Proof of support in motion</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="surface-card group min-h-[156px] p-5"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/6 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary/65">{stat.label}</p>
                <p className="mt-1 text-4xl font-bold leading-none text-primary">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
