import { Instagram } from 'lucide-react';
import { useState } from 'react';

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section section-dark">
      <div className="container-shell grid gap-7 lg:grid-cols-[1fr_1.2fr]">
        <article className="surface-card-dark p-6 sm:p-8">
          <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border border-white/25 bg-white/6 sm:mx-0">
            {imgError ? (
              <div className="flex h-full items-center justify-center text-5xl font-bold text-accent">S</div>
            ) : (
              <img
                src="/seagal-profile.jpg"
                alt="Seagal Hagege"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
          <h2 className="heading-lg text-white">Seagal Hagege</h2>
          <p className="mt-3 text-muted-dark">
            American-Israeli community activist and founder of Kadima Concierge, leading rapid-response support for soldiers and families.
          </p>
          <a
            href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary mt-5 w-full sm:w-auto"
          >
            <Instagram size={16} /> Follow updates
          </a>
        </article>

        <article className="surface-card-dark p-6 sm:p-8">
          <h3 className="heading-lg text-white">What Kadima Concierge does</h3>
          <p className="mt-4 text-muted-dark">
            We connect donors in Israel and abroad with soldiers and units that need support now. Operating under The Ari Fuld Project,
            we focus on fast procurement and delivery of critical equipment.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-muted-dark">
            <li className="surface-card-dark p-3">Protective helmets, vests, ceramic plates, boots, uniforms, and eyewear</li>
            <li className="surface-card-dark p-3">Community-funded support with transparent impact reporting</li>
            <li className="surface-card-dark p-3">Helmets 4 Chayalim: transforming retired helmets into fundraising art</li>
          </ul>
          <blockquote className="mt-6 border-l-2 border-accent pl-4 italic text-white/90">
            “What we send is protection—but what we build is solidarity.”
          </blockquote>
        </article>
      </div>
    </section>
  );
}
