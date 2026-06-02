import { motion } from 'motion/react';
import { helmetsData } from '../data/helmetsData';

const storyPoints = ['48 hours from donation to dispatch', 'Frontline units equipped within active zones', 'Follow-up support coordinated with communities'];

export function FeaturedSuccessStory() {
  const featuredItem = helmetsData[0];

  return (
    <section className="section-dark py-14 md:py-18">
      <div className="container-shell">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="heading-eyebrow text-accent">Featured success story</p>
          <h2 className="heading-lg text-white">From one gift to immediate frontline impact</h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 rounded-3xl border border-white/15 bg-white/6 p-5 shadow-[0_22px_50px_rgba(6,5,12,0.38)] backdrop-blur-md md:grid-cols-[1fr_1.15fr] md:items-center md:p-6"
        >
          <img
            src={featuredItem.imageSrc}
            alt={featuredItem.name}
            className="h-64 w-full rounded-2xl object-cover md:h-72"
            loading="lazy"
            decoding="async"
          />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.09em] text-accent">{featuredItem.artist}</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">{featuredItem.name}</h3>
            <p className="mt-3 text-sm text-muted-dark">
              A donor-funded helmet artwork campaign converted directly into field-ready protective equipment for active IDF teams.
            </p>

            <ul className="mt-5 space-y-2">
              {storyPoints.map((point) => (
                <li key={point} className="rounded-xl border border-white/15 bg-white/8 px-3 py-2 text-sm text-white/88">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
