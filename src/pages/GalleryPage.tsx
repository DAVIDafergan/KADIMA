import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { EventsGallery } from '../components/EventsGallery';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function GalleryPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <PageHero
          tag="Gallery"
          title="Our Journey in Photos"
          subtitle="Every event, exhibition, and moment of connection — captured in our gallery of impact."
        />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <EventsGallery />
      </motion.div>
    </motion.div>
  );
}
