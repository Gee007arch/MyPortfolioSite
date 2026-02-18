import { useState } from 'react';
import BackgroundCircles from './BackgroundCircles';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
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
      github: "#"
    },
    {
      id: 5,
      title: "Vendure Capital: FinTech & Investment Portal",
      category: "web",
      image: "assets/img/portfolio/project5.png",
      description: "A high-end corporate platform for capital partners, focusing on data visualization, trust metrics, and a sophisticated professional aesthetic to drive enterprise growth.",
      link: "https://vendurecapital.com/",
      github: "#"
    },
    {
      id: 6,
      title: "CleverFood: On-Demand Delivery Marketplace",
      category: "app",
      image: "assets/img/portfolio/project6.png",
      description: "A functional food discovery and ordering platform that prioritizes local search functionality and a seamless user flow from restaurant selection to checkout.",
      link: "https://clever-food.netlify.app/",
      github: "#"
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="portfolio" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects and creative work across different domains.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {['all', 'web', 'app', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-theme-red text-white shadow-lg shadow-red-900/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-theme-red hover:text-white'
              }`}
            >
              {category === 'all' ? 'All' : 
               category === 'web' ? 'Web Development' : 
               category === 'app' ? 'Mobile Apps' : 'UI/UX Design'}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer animate-fade-in"
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg shadow-red-900/10 group-hover:shadow-red-900/30 transition-all duration-300 border border-gray-800 group-hover:border-red-500/50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/70 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2 text-theme-red">{item.title}</h3>
                    <p className="text-sm mb-4 text-gray-300">{item.description}</p>
                    <div className="flex justify-center space-x-4">
                      <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        <i className="fas fa-external-link-alt mr-2"></i>View
                      </button>
                      <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
                        <i class="fab fa-github mr-2"></i>Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
