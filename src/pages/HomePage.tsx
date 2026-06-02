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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_22%_22%,rgba(232,188,116,0.2),transparent_40%),radial-gradient(circle_at_82%_10%,rgba(232,188,116,0.14),transparent_38%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10">
        <Stats />
      </motion.div>
      <motion.div variants={sectionVariants} className="relative z-10">
        <Partners />
      </motion.div>
    </motion.div>
  );
}
