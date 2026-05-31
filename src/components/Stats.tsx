import { animate } from 'motion';
import { useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ from, to, duration, prefix = '', suffix = '' }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.floor(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

const stats = [
  { label: "Soldiers Supported", value: 1000, suffix: "+" },
  { label: "Helmets Delivered", value: 500, suffix: "+" },
  { label: "Communities Reached", value: 50, suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-20 bg-bg-light border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-primary rounded-lg p-6 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-xl">
          {stats.map((stat, i) => (
            <div key={i} className="px-4 py-4 md:py-0 text-center">
              <div className="text-3xl md:text-5xl font-display font-bold text-accent mb-2">
                <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs font-accent uppercase tracking-widest text-white/60">{stat.label}</div>
            </div>
          ))}
          <div className="px-4 py-4 md:py-0 text-center flex flex-col justify-center">
            <div className="text-3xl md:text-5xl font-display font-bold text-accent mb-2">
              Oct 7
            </div>
            <div className="text-[10px] md:text-xs font-accent uppercase tracking-widest text-white/60">Mission Commenced</div>
          </div>
        </div>
      </div>
    </section>
  );
}
