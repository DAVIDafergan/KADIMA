import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { helmetsData } from '../data/helmetsData';

export function GalleryPreview() {
  const previewItems = helmetsData.slice(0, 3);

  return (
    <section className="bg-[#f7f4ed] py-14 md:py-18">
      <div className="container-shell">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="heading-eyebrow">Gallery preview</p>
            <h2 className="heading-lg">Stories, people, and moments of support</h2>
          </div>
          <Link to="/gallery" className="btn-base btn-ghost w-full sm:w-auto">
            View full gallery <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((helmet, index) => (
            <motion.article
              key={helmet.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={helmet.imageSrc}
                alt={helmet.name}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12">
                <p className="text-sm font-semibold text-white">{helmet.name}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
