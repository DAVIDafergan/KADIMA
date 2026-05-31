import { animate } from 'motion';
import { useInView, motion } from 'motion/react';
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
  {
    label: "Soldiers Supported",
    value: 1000,
    suffix: "+",
    gradientText: "from-[#E5B25D] via-[#FFD98E] to-[#B8852B]",
    glowColor: "rgba(229,178,93,0.25)",
    borderColor: "rgba(229,178,93,0.15)",
  },
  {
    label: "Helmets Delivered",
    value: 500,
    suffix: "+",
    gradientText: "from-[#F72585] via-[#FF6FBA] to-[#B5179E]",
    glowColor: "rgba(247,37,133,0.25)",
    borderColor: "rgba(247,37,133,0.15)",
  },
  {
    label: "Communities Reached",
    value: 50,
    suffix: "+",
    gradientText: "from-[#4CC9F0] via-[#90E0FF] to-[#4361EE]",
    glowColor: "rgba(76,201,240,0.25)",
    borderColor: "rgba(76,201,240,0.15)",
  },
];

export function Stats() {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23120A1A'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-bright/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center group py-8 px-4 rounded-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: `radial-gradient(ellipse at top, ${stat.glowColor} 0%, transparent 70%)`,
                boxShadow: `inset 0 0 0 1px ${stat.borderColor}`,
              }}
            >
              <div
                className={`text-6xl md:text-7xl xl:text-8xl font-display font-black bg-gradient-to-br ${stat.gradientText} bg-clip-text text-transparent mb-2 leading-none tabular-nums`}
              >
                <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className="w-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3 mt-1" />
              <div className="font-accent uppercase tracking-widest text-[10px] md:text-xs text-primary/50 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}

          {/* Oct 7 card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center group py-8 px-4 rounded-2xl transition-all duration-500 hover:-translate-y-1"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(123,47,190,0.18) 0%, transparent 70%)',
              boxShadow: 'inset 0 0 0 1px rgba(123,47,190,0.15)',
            }}
          >
            <div className="text-6xl md:text-7xl xl:text-8xl font-display font-black bg-gradient-to-br from-[#C77DFF] via-[#E0AAFF] to-[#7B2FBE] bg-clip-text text-transparent mb-2 leading-none">
              Oct 7
            </div>
            <div className="w-10 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3 mt-1" />
            <div className="font-accent uppercase tracking-widest text-[10px] md:text-xs text-primary/50 leading-tight">
              Mission Commenced
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
