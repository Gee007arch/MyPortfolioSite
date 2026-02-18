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

function App() {
  return (
    <div className="App bg-theme-off-black text-white relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Stats /> */}
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
