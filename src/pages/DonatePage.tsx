import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { Donate } from '../components/Donate';
import { Partners } from '../components/Partners';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function DonatePage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <PageHero
          tag="Support the Mission"
          title="Stand With Our Soldiers"
          subtitle="Every donation helps provide life-saving gear and critical support."
        />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Donate />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Partners />
      </motion.div>
    </motion.div>
  );
}
