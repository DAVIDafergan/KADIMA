import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo';
import { Helmets } from './components/Helmets';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { Partners } from './components/Partners';
import { Donate } from './components/Donate';
import { Footer } from './components/Footer';
import { JoinProject } from './components/JoinProject';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'join'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen font-body text-primary bg-bg-light">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <WhatWeDo />
            <Helmets setCurrentPage={setCurrentPage} />
            <Stats />
            <Gallery />
            <Partners />
            <Donate />
          </>
        ) : (
          <JoinProject setCurrentPage={setCurrentPage} />
        )}
      </main>
      <Footer />
    </div>
  );
}
