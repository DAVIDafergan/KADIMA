interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section className="section-dark relative overflow-hidden pt-32">
      <div className="container-shell section text-center">
        <p className="heading-eyebrow text-accent">{tag}</p>
        <h1 className="heading-xl text-white">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-dark">{subtitle}</p>
      </div>
    </section>
  );
}
