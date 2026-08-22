import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/specials/CustomCursor';
import ScrollProgress from './components/specials/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App bg-theme-off-black text-white relative min-h-screen">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-theme-red focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <FadeInSection>
            <Skills />
          </FadeInSection>
          <FadeInSection>
            <Resume />
          </FadeInSection>
          <FadeInSection>
            <Portfolio />
          </FadeInSection>
          <FadeInSection>
            <Services />
          </FadeInSection>
          <FadeInSection>
            <Testimonials />
          </FadeInSection>
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default App;
