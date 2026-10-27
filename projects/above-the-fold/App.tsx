
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { AmbientBackground } from './components/AmbientBackground';
import { Home } from './pages/Home';
import { Methodology } from './pages/Methodology';
import { CaseStudies } from './pages/CaseStudies';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const homeSections = ['process', 'proof', 'who', 'get-started', 'footer-section', 'home'];

      if (homeSections.includes(hash)) {
        if (currentPath !== 'home') {
          setCurrentPath('home');
          // Use a timeout to wait for the Home component to mount and animate in
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        } else {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        setCurrentPath(hash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  return (
    <div className="relative min-h-screen selection:bg-stone-500/30">
      <AmbientBackground />
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPath === 'home' && <Home onNavigate={navigate} />}
            {currentPath === 'methodology' && <Methodology onNavigate={navigate} />}
            {currentPath === 'case-studies' && <CaseStudies />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
