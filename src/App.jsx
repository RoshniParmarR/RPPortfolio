import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // If navigating to home or empty, scroll to top
      if (!window.location.hash || window.location.hash === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isResumeView = currentHash === '#resume';

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-white transition-colors duration-300 overflow-x-hidden">
        {isResumeView ? (
          <main className="animate-in fade-in duration-300">
            <Resume />
          </main>
        ) : (
          <>
            {/* Navigation Header */}
            <Header />

            {/* Portfolio Content Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Contact />
            </main>

            {/* Hidden Resume for Direct Download in background DOM */}
            <div style={{ position: 'absolute', left: '-9999px', top: '0', width: '1024px', pointerEvents: 'none' }} aria-hidden="true">
              <div id="hidden-resume-container">
                <Resume isHidden={true} />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
