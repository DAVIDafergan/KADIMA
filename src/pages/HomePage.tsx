import { motion, useReducedMotion } from 'motion/react';
import { Gallery } from '../components/Gallery';
import { Helmets } from '../components/Helmets';
import { Hero } from '../components/Hero';
import { JoinProject } from '../components/JoinProject';
import { Partners } from '../components/Partners';
import { Stats } from '../components/Stats';
import { WhatWeDo } from '../components/WhatWeDo';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const sectionViewport = { once: true, margin: '-80px 0px -80px 0px' };

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  const auraAnimation = prefersReducedMotion
    ? undefined
    : {
        y: [0, -36, 0],
      };

  return (
    <main className="relative min-w-[320px] overflow-hidden bg-[#0f0b18]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,188,116,0.16),transparent_42%),radial-gradient(circle_at_80%_85%,rgba(143,106,198,0.12),transparent_45%)]"
        animate={auraAnimation}
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 9,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none relative z-10 h-20 bg-gradient-to-b from-[#0f0b18] to-[#f6f4ef]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.8, 1, 0.8] }}
        transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <WhatWeDo />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <Stats />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none relative z-10 h-20 bg-gradient-to-b from-[#f6f4ef] to-[#0f0b18]"
      />

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <Helmets />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <Gallery />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none relative z-10 h-20 bg-gradient-to-b from-[#f6f4ef] to-[#0f0b18]"
      />

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <JoinProject />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none relative z-10 h-20 bg-gradient-to-b from-[#0f0b18] to-[#f6f4ef]"
      />

      <motion.div
        className="relative z-10 transform-gpu will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={sectionVariants}>
          <Partners />
        </motion.div>
      </motion.div>
    </main>
  );
}
