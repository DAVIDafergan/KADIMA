import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FinalCta() {
  return (
    <section className="section-dark py-14 md:py-18">
      <div className="container-shell">
        <article className="rounded-3xl border border-white/16 bg-white/8 p-6 text-center shadow-[0_22px_50px_rgba(6,5,12,0.38)] backdrop-blur-lg md:p-8">
          <p className="heading-eyebrow text-accent">Take action</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Help deliver the next life-saving mission.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-dark">
            Your support moves critical protection and emergency resources to the people who need them now.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://my.israelgives.org/en/fundme/kadima_concierge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary w-full sm:w-auto sm:min-w-[168px]"
            >
              Donate
            </a>
            <Link to="/join" className="btn-base btn-secondary w-full sm:w-auto sm:min-w-[168px]">
              Join the mission <ArrowRight size={15} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
