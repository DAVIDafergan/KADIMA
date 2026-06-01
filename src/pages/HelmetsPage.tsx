import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { Helmets } from '../components/Helmets';
import { Gallery } from '../components/Gallery';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function HelmetsPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <PageHero
          tag="Helmets 4 Chayalim"
          title="Art Meets <span class='font-artistic text-accent lowercase'>Protection</span>"
          subtitle="A collection that transforms helmets into stories of healing and solidarity."
        />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Helmets />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Gallery />
      </motion.div>
    </motion.div>
  );
}
