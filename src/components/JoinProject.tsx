import { FormEvent, useState } from 'react';
import { ArrowLeft, Instagram, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const checklist = [
  'Sponsor a helmet transformation',
  'Host an exhibition or community event',
  'Connect us to soldiers who need support',
  'Volunteer with logistics and outreach',
];

export function JoinProject() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();

    if (!name || !email) {
      setError('Please fill in your name and email.');
      setSubmitted(false);
      return;
    }

    setError('');
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="section section-dark">
      <div className="container-shell">
        <button type="button" onClick={() => navigate('/')} className="btn-base btn-secondary mb-5">
          <ArrowLeft size={15} /> Back to home
        </button>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <article className="surface-card-dark p-6 sm:p-8">
            <p className="heading-eyebrow text-accent">Join Helmets 4 Chayalim</p>
            <h2 className="heading-lg text-white">Turn stories into protection</h2>
            <p className="mt-4 text-muted-dark">
              We collaborate with artists, donors, and volunteers to transform retired helmets into powerful fundraising pieces.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="surface-card-dark p-3 text-sm text-muted-dark">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:info@arifuld.org" className="btn-base btn-primary">
                <Mail size={15} /> Email us
              </a>
              <a
                href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-secondary"
              >
                <Instagram size={15} /> Instagram
              </a>
            </div>
          </article>

          <article className="surface-card-dark p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Get involved</h3>
            <p className="mt-2 text-sm text-muted-dark">Share your details and our team will contact you with relevant opportunities.</p>

            <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
              <div>
                <label htmlFor="join-name" className="mb-1 block text-sm font-semibold text-white">
                  Full name
                </label>
                <input
                  id="join-name"
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-md border border-white/25 bg-white/8 px-3 py-3 text-white placeholder:text-white/55"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="join-email" className="mb-1 block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  id="join-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-md border border-white/25 bg-white/8 px-3 py-3 text-white placeholder:text-white/55"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="join-note" className="mb-1 block text-sm font-semibold text-white">
                  How would you like to help?
                </label>
                <textarea
                  id="join-note"
                  name="note"
                  rows={4}
                  className="w-full rounded-md border border-white/25 bg-white/8 px-3 py-3 text-white placeholder:text-white/55"
                  placeholder="Tell us about your interest"
                />
              </div>
              {error ? <p className="text-sm font-semibold text-red-300">{error}</p> : null}
              {submitted ? <p className="text-sm font-semibold text-emerald-300">Thanks! We’ll be in touch shortly.</p> : null}
              <button type="submit" className="btn-base btn-primary w-full">
                Submit interest
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
