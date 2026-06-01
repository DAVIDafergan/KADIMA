import { Heart, Shield, Users } from 'lucide-react';

const impactPoints = ['Protective helmets & armor', 'Urgent field supplies', 'Community and family support'];

export function Donate() {
  return (
    <section className="section section-dark">
      <div className="container-shell">
        <div className="section-title-wrap">
          <p className="heading-eyebrow text-accent">Support the mission</p>
          <h2 className="heading-lg text-white">Help soldiers get home safely</h2>
          <p className="mt-3 text-muted-dark">Every donation goes toward life-saving gear and direct field support.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <article className="surface-card-dark p-6 sm:p-8">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
              <Heart size={24} />
            </div>
            <h3 className="text-3xl font-semibold text-white">Your contribution creates immediate impact</h3>
            <ul className="mt-5 space-y-3">
              {impactPoints.map((item) => (
                <li key={item} className="surface-card-dark flex items-center gap-3 p-3 text-sm text-muted-dark">
                  <Shield size={16} className="text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-dark">Tax-deductible donations are processed through IsraelGives.</p>
          </article>

          <aside className="surface-card-dark p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Choose your next step</h3>
            <p className="mt-2 text-sm text-muted-dark">Donate securely today or contact us for sponsorship opportunities.</p>
            <div className="mt-5 space-y-3">
              <a
                href="https://my.israelgives.org/en/fundme/kadima_concierge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary w-full"
              >
                Donate via IsraelGives
              </a>
              <a href="mailto:info@arifuld.org" className="btn-base btn-secondary w-full">
                <Users size={16} /> Partner with us
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
