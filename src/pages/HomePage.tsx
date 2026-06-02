import { motion } from 'motion/react';
import { FeaturedSuccessStory } from '../components/FeaturedSuccessStory';
import { FinalCta } from '../components/FinalCta';
import { GalleryPreview } from '../components/GalleryPreview';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Stats } from '../components/Stats';
import { WhatWeDo } from '../components/WhatWeDo';

const sectionVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative min-w-[320px] overflow-hidden bg-[#0f0b18]">
      <Hero />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <Stats />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <WhatWeDo />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <FeaturedSuccessStory />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <GalleryPreview />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <Partners />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={sectionVariants}>
        <FinalCta />
      </motion.div>
    </main>
  );
}
