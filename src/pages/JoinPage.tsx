import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { JoinProject } from '../components/JoinProject';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function JoinPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <PageHero
          tag="Join the Project"
          title="Helmets 4 Chayalim"
          subtitle="From protection to purpose — help carry the story forward."
        />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <JoinProject />
      </motion.div>
    </motion.div>
  );
}
