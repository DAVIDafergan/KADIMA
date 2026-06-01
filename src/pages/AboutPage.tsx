import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { About } from '../components/About';
import { WhatWeDo } from '../components/WhatWeDo';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <PageHero
          tag="Our Story & Founder"
          title="Our Mission"
          subtitle="Supporting soldiers with gear, care, and community across Israel."
        />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <About />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <WhatWeDo />
      </motion.div>
    </motion.div>
  );
}
