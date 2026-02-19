import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="App bg-theme-off-black text-white relative min-h-screen">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />        
      <Hero />
        {/* <FadeInSection><About /></FadeInSection> */}
        <About />
        {/* <Stats /> */}
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Resume /></FadeInSection>
        <FadeInSection><Portfolio /></FadeInSection>
        <FadeInSection><Services /></FadeInSection>
        <FadeInSection><Testimonials /></FadeInSection>
        <FadeInSection><Contact /></FadeInSection>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible
    
    // Find the section element within children to observe
    // This is a simplified approach; ideally refs would be passed down
    const domElement = document.querySelector(`#${children.type.name.toLowerCase()}`);
    if (domElement) observer.observe(domElement);
    
    // Fallback: observe a wrapper div
    // But since we want to animate the section itself, let's wrap it
  }, [children]);

  return (
    <div 
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={(el) => {
        if (!el) return;
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      }}
    >
      {children}
    </div>
  );
};

export default App;
