import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { helmetsData } from '../data/helmetsData';

export function Helmets() {
  const [active, setActive] = useState(0);
  const current = helmetsData[active];

  const goPrev = () => setActive((prev) => (prev - 1 + helmetsData.length) % helmetsData.length);
  const goNext = () => setActive((prev) => (prev + 1) % helmetsData.length);

  return (
    <section className="section section-dark">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow text-accent">Featured collection</p>
          <h2 className="heading-lg text-white">Stories painted on protection</h2>
          <p className="mt-3 text-muted-dark">Each sold artwork helps fund replacement protective gear for active soldiers.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <article className="surface-card-dark p-4 sm:p-6">
            <img
              key={current.id}
              src={current.imageSrc}
              alt={current.name}
              className="h-[320px] w-full rounded-xl object-contain bg-black/20 p-3 sm:h-[420px]"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-4 flex items-center justify-between gap-3">
              <button type="button" onClick={goPrev} className="btn-base btn-secondary min-w-[44px] px-3" aria-label="Previous helmet">
                <ArrowLeft size={16} />
              </button>
              <div className="flex gap-2">
                {helmetsData.map((helmet, index) => (
                  <button
                    key={helmet.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`View ${helmet.name}`}
                    className={`h-2.5 w-2.5 rounded-full ${index === active ? 'bg-accent' : 'bg-white/30'}`}
                  />
                ))}
              </div>
              <button type="button" onClick={goNext} className="btn-base btn-secondary min-w-[44px] px-3" aria-label="Next helmet">
                <ArrowRight size={16} />
              </button>
            </div>
          </article>

          <article className="surface-card-dark p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-accent">{current.artist}</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">{current.name}</h3>
            <p className="mt-2 text-sm text-muted-dark">
              {current.medium} · {current.year}
            </p>
            <p className="mt-4 text-muted-dark">{current.description}</p>
            <Link to="/join" className="btn-base btn-primary mt-6">
              Read the project story
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
