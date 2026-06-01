import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Partners } from '../components/Partners';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomePage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Stats />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Partners />
      </motion.div>
    </motion.div>
  );
}
