import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { PageTransition } from './components/PageTransition';
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';
import { useScrollToTop } from './hooks/useScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HelmetsPage = lazy(() => import('./pages/HelmetsPage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));

function AppContent() {
  useScrollToTop();

  return (
    <div className="min-h-screen font-body text-primary bg-bg-light">
      <ScrollProgress />
      <CustomCursor />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] bg-accent text-primary px-4 py-2 rounded"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/helmets" element={<HelmetsPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/donate" element={<DonatePage />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
