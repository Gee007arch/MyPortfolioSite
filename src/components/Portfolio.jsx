import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./specials/BackgroundCircles";
import TechOrbit from "./specials/TechOrbit";
import TiltCard from "./specials/TiltCard";
import { fadeInUp, staggerContainer, hoverScale } from "../utils/motion";
import { portfolioItems } from "../data/siteConfig";

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const closeButtonRef = useRef(null);

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
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
      return () => {
        document.body.style.overflow = "auto";
      };
    }

    document.body.style.overflow = "auto";
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  return (
    <section
      id="portfolio"
      className="section-padding bg-theme-deep-blood relative overflow-hidden"
    >
      <BackgroundCircles variant="portfolio" />

      <motion.div
        className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 w-full relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          variants={fadeInUp}
          className="text-center my-12 relative inline-block w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block relative z-10">
            My Latest Works
          </h2>
          <TechOrbit className="-right-8 -top-8 w-24 h-24 opacity-20" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            A showcase of my recent projects and creative work across different
            domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={hoverScale}
              onClick={() => openLightbox(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openLightbox(item);
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer h-full"
            >
              <TiltCard className="h-full">
                <div className="relative overflow-hidden rounded-xl shadow-lg shadow-red-900/10 transition-all duration-300 border border-gray-800 group-hover:border-red-500/50 h-full bg-black/40">
                  <div className="overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                    <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <h3 className="text-xl font-bold mb-2 text-theme-red">
                        {item.title}
                      </h3>
                      <p className="text-sm mb-4 text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <button
                          type="button"
                          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(item.link, "_blank");
                          }}
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>View
                        </button>
                        <button
                          type="button"
                          className="bg-black/50 backdrop-blur-sm border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(item.github, "_blank");
                          }}
                        >
                          <i className="fab fa-github mr-2"></i>Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div
            className="relative max-w-4xl w-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close project details"
              className="absolute -top-10 right-0 text-white text-2xl hover:text-red-500 z-10 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              decoding="async"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-red-900/20 border border-gray-800"
            />
            <div className="mt-4 text-white text-center">
              <h3 id="lightbox-title" className="text-xl font-bold text-theme-red">
                {selectedImage.title}
              </h3>
              <p className="text-sm opacity-80 text-gray-300">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
