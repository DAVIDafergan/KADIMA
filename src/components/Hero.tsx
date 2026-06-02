import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const trustCards = [
  { icon: ShieldCheck, label: 'Rapid protective gear delivery' },
  { icon: HeartHandshake, label: 'Direct support for soldiers and families' },
  { icon: Sparkles, label: 'Transparent impact powered by donors' },
];

const particles = [
  { left: '8%', top: '22%', size: 4, delay: 0.2 },
  { left: '15%', top: '72%', size: 3, delay: 0.6 },
  { left: '24%', top: '40%', size: 2, delay: 1.1 },
  { left: '36%', top: '16%', size: 4, delay: 1.7 },
  { left: '43%', top: '62%', size: 3, delay: 0.9 },
  { left: '55%', top: '28%', size: 2, delay: 1.3 },
  { left: '66%', top: '78%', size: 4, delay: 0.4 },
  { left: '74%', top: '35%', size: 3, delay: 1.5 },
  { left: '86%', top: '56%', size: 2, delay: 0.8 },
  { left: '92%', top: '18%', size: 3, delay: 1.9 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, prefersReducedMotion ? 1.05 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -70]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0916] pt-28">
      <motion.div aria-hidden className="absolute inset-0" style={{ y: backgroundY, scale: backgroundScale }}>
        <img
          src="https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(232,188,116,0.36),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(143,106,198,0.28),transparent_42%),linear-gradient(180deg,rgba(7,5,12,0.56)_0%,rgba(7,5,12,0.9)_58%,rgba(7,5,12,0.98)_100%)]"
      />

      {!prefersReducedMotion && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className="absolute rounded-full bg-white/40"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ y: [0, -16, 0], opacity: [0.22, 0.9, 0.22] }}
              transition={{ duration: 4.8, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      <motion.div className="container-shell relative z-10 pb-14" style={{ y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="heading-eyebrow text-accent">Kadima Concierge · Since Oct 7, 2023</p>
          <h1 className="heading-xl text-white">Stand with Israel’s defenders when every second matters.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-dark sm:text-lg">
            Funding critical gear, field essentials, and frontline resilience with speed and dignity.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary w-full sm:w-auto sm:min-w-[168px]"
            >
              Donate
            </a>
            <Link to="/about" className="btn-base btn-secondary w-full sm:w-auto sm:min-w-[168px]">
              Learn More <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.26 } },
          }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {trustCards.map(({ icon: Icon, label }) => (
            <motion.article
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="rounded-2xl border border-white/25 bg-white/10 p-4 text-left shadow-[0_24px_50px_rgba(9,8,16,0.35)] backdrop-blur-xl"
            >
              <Icon size={18} className="text-accent" />
              <p className="mt-2 text-sm text-white/90">{label}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      {!prefersReducedMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[7%] top-[24%] hidden rounded-2xl border border-white/20 bg-white/12 p-4 text-xs text-white/80 shadow-[0_20px_45px_rgba(6,5,12,0.36)] backdrop-blur-lg lg:block"
            animate={{ y: [0, -14, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            24/7 direct procurement
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[32%] hidden rounded-2xl border border-white/20 bg-white/10 p-4 text-xs text-white/80 shadow-[0_20px_45px_rgba(6,5,12,0.36)] backdrop-blur-lg lg:block"
            animate={{ y: [0, 16, 0], rotate: [1, -1, 1] }}
            transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Community-backed missions
          </motion.div>
        </>
      )}
    </section>
  );
}
