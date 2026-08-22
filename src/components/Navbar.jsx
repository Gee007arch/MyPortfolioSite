import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundCircles from './specials/BackgroundCircles';
import { navLinks, site } from '../data/siteConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollMiddle = viewportHeight / 2;

      setScrolled(scrollY > 100);

      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';

      sections.forEach((section) => {
        const id = section.getAttribute('id');
        if (!sectionIds.includes(id)) return;

        const rect = section.getBoundingClientRect();
        
        if (rect.top <= scrollMiddle && rect.bottom >= scrollMiddle) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(href.substring(1));
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg mb-7 shadow-red-900/10' : 'bg-transparent'}`}
    >
      {scrolled && <BackgroundCircles variant="default" />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-theme-red via-theme-red-hover to-theme-paper-white opacity-60 blur-md animate-pulse"></div>
              <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full border-2 border-theme-red shadow-lg shadow-red-900/40 overflow-hidden bg-black/60">
                <img src={site.images.logo} alt={`${site.shortName} logo`} className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                link.name === 'Contact' ? (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-theme-red hover:bg-theme-red-hover text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform"
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`text-base font-bold transition-colors relative group ${
                      activeSection === link.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    initial="inactive"
                    animate={activeSection === link.href.substring(1) ? "active" : "inactive"}
                    whileHover="hover"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-theme-red origin-left"
                      variants={{
                        active: { width: "100%" },
                        inactive: { width: "0%" },
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </motion.a>
                )
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-white hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-red rounded transition-colors"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            className="md:hidden bg-black/95 backdrop-blur-xl absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`block px-3 py-3 rounded-md text-base font-bold ${
                    activeSection === link.href.substring(1)
                      ? 'text-theme-red bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  } ${link.name === 'Contact' ? 'bg-theme-red text-white hover:bg-theme-red-hover mt-4 text-center' : ''}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
