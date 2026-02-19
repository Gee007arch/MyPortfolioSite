import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundCircles from './BackgroundCircles';
import TechOrbit from './TechOrbit';
import { fadeInUp, staggerContainer, hoverScale } from '../utils/motion';

const Portfolio = () => {
  const [filter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "SkyWatch: Real-Time Weather Dashboard",
      category: "app",
      image: "assets/img/portfolio/project1.png",
      description: "A sleek, user-centric weather application that utilizes API integration to deliver live atmospheric data and forecasts with a minimalist \"glassmorphism\" UI.",
      link: "https://geeoicialweatherapp.netlify.app/",
      github: "https://github.com/Gee007arch/ShyWatch---Weather-App"
    },
    {
      id: 2,
      title: "GS Architects: Corporate Portfolio Hub",
      category: "web",
      image: "assets/img/portfolio/project2.png",
      description: "A professional architectural showcase website featuring high-resolution galleries and a modern, high-contrast interface designed to highlight large-scale structural projects.",
      link: "https://gs-architects.netlify.app/",
      github: "https://github.com/Gee007arch/GS-architects"
    },
    {
      id: 3,
      title: "GEE's Crypto | Digital Asset Tracker",
      category: "app",
      image: "assets/img/portfolio/project3.png",
      description: "A modern, mobile-responsive crypto-tracking platform that provides real-time data on digital assets, enabling users to monitor their portfolios and stay informed about market trends.",
      link: "https://geecrypto.netlify.app/",
      github: "https://github.com/Gee007arch/Gee-s-Crypto"
    },
    {
      id: 4,
      title: "Exclusive: Full-Scale Retail E-Commerce Platform",
      category: "web",
      image: "assets/img/portfolio/project4.png",
      description: "A comprehensive shopping solution featuring a dynamic flash-sale countdown, multi-category navigation, and a robust product filtering system modeled after modern retail giants.",
      link: "https://gee-ecommerce.netlify.app/",
      github: "https://github.com/Gee007arch/Gee_e-commerce"
    },
    {
      id: 5,
      title: "Vendure Capital: FinTech & Investment Portal",
      category: "web",
      image: "assets/img/portfolio/project5.png",
      description: "A high-end corporate platform for capital partners, focusing on data visualization, trust metrics, and a sophisticated professional aesthetic to drive enterprise growth.",
      link: "https://vendurecapital.com/",
      github: "https://github.com/tonituler/vendure_landing"
    },
    {
      id: 6,
      title: "CleverFood: On-Demand Delivery Marketplace",
      category: "app",
      image: "assets/img/portfolio/project6.png",
      description: "A functional food discovery and ordering platform that prioritizes local search functionality and a seamless user flow from restaurant selection to checkout.",
      link: "https://clever-food.netlify.app/",
      github: "https://github.com/Gee007arch/cleverfood"
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }

    document.body.style.overflow = 'auto';
  }, [lightboxOpen]);

  return (
    <section id="portfolio" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="portfolio" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center my-12 relative inline-block w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block relative z-10">My Latest Works</h2>
          <TechOrbit className="-right-8 -top-8 w-24 h-24 opacity-20" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            A showcase of my recent projects and creative work across different domains.
          </p>
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id} 
              variants={fadeInUp}
              whileHover={hoverScale}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg shadow-red-900/10 transition-all duration-300 border border-gray-800 group-hover:border-red-500/50 h-full">
                <div className="overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                  <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2 text-theme-red">{item.title}</h3>
                    <p className="text-sm mb-4 text-gray-300 line-clamp-3">{item.description}</p>
                    <div className="flex justify-center space-x-4">
                      <button 
                        className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105" 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.link, '_blank');
                        }}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>View
                      </button>
                      <button 
                        className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105" 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(item.github, '_blank');
                        }}
                      >
                        <i className="fab fa-github mr-2"></i>Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {lightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full max-h-screen" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-red-500 z-10 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-red-900/20 border border-gray-800"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold text-theme-red">{selectedImage.title}</h3>
              <p className="text-sm opacity-80 text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
