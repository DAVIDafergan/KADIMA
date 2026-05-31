export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white/80 border-t border-accent/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none float-slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          <div>
            <h3 className="text-3xl font-display font-black text-white mb-2 italic drop-shadow-md">KADIMA <span className="font-artistic text-accent-bright lowercase text-4xl">Concierge</span></h3>
            <p className="text-white/50 font-body max-w-sm text-sm">
              Supporting IDF soldiers with essential tactical gear, nutrition, and wellness.
            </p>
          </div>

          <div className="space-y-3 text-white/60 text-sm font-body">
            <p><strong className="text-accent uppercase font-accent text-xs tracking-widest mr-2">Website:</strong> <a href="https://arifuld.org/kadima-concierge" className="hover:text-accent-bright transition-colors" target="_blank" rel="noopener noreferrer">arifuld.org/kadima-concierge</a></p>
            <p><strong className="text-accent uppercase font-accent text-xs tracking-widest mr-2">Address:</strong> Zeit Shemen 30/1, Efrat, Gush Etzion, Israel</p>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-4">
              <a href="https://facebook.com/TheAriFuldProject" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright transition-colors">
                 Facebook
              </a>
              <span className="text-white/20">|</span>
              <a href="https://x.com/arifuldproject" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright transition-colors">
                 X
              </a>
              <span className="text-white/20">|</span>
              <a href="https://www.instagram.com/seagalitberetz?igsh=MXNxcWYwZGVuam80Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-accent-bright transition-colors flex items-center gap-1">
                 Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] font-accent uppercase tracking-widest font-bold text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span className="hover:text-accent transition-colors">Israel ID #580672897</span>
            <span className="hover:text-accent transition-colors">US EIN 83-3571366</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">The Ari Fuld Project</span>
            <img src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png" className="h-10 opacity-50 hover:opacity-100 transition-opacity filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="Ari Fuld Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
