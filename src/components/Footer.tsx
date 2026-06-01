import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Mission', href: '/about' },
  { label: 'Helmets', href: '/helmets' },
  { label: 'Join Us', href: '/join' },
  { label: 'Donate', href: '/donate' },
];

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10 py-14">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <img
              src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png"
              alt="Kadima Concierge"
              className="h-14 w-auto brightness-0 invert"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 max-w-sm text-sm text-muted-dark">
              Kadima Concierge funds and delivers tactical support for soldiers and communities in Israel.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Navigate</h2>
            <ul className="mt-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="inline-flex min-h-[44px] items-center text-white/85 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">Connect</h2>
            <div className="mt-3 space-y-1 text-sm">
              <a href="https://facebook.com/TheAriFuldProject" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-white/85 hover:text-accent">Facebook</a>
              <a href="https://x.com/arifuldproject" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-white/85 hover:text-accent">X</a>
              <a href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-white/85 hover:text-accent">Instagram</a>
            </div>
          </div>
        </div>

        <p className="mt-9 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Kadima Concierge · The Ari Fuld Project
        </p>
      </div>
    </footer>
  );
}
