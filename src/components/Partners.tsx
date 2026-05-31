export function Partners() {
  return (
    <section className="py-16 bg-bg-light border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <div className="w-48 opacity-80 mix-blend-multiply">
          <img 
            src="https://arifuld.org/wp-content/uploads/2025/10/AFP-Transparent-Logo-300-px.png" 
            alt="The Ari Fuld Project" 
            className="w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left text-primary/80 font-body">
          <h3 className="font-bold text-xl mb-2 text-primary">Kadima Concierge operates under The Ari Fuld Project</h3>
          <p className="text-sm">Registered Amuta (NGO) in Israel – ID# 580672897 (with Tofes 46)</p>
          <p className="text-sm">Registered 501(c)(3) charity in the US – EIN: 83-3571366</p>
        </div>
      </div>
    </section>
  );
}
