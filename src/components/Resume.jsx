import { motion } from 'framer-motion';
import BackgroundCircles from './specials/BackgroundCircles';
import TechOrbit from './specials/TechOrbit';
import { fadeInUp, staggerContainer } from '../utils/motion';
import { site } from '../data/siteConfig';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="resume" />

      <motion.div 
        className="max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 w-full relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center my-12 relative inline-block w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block relative z-10">
            My Resume
          </h2>
          <TechOrbit className="-right-6 -top-6 w-24 h-24 opacity-20" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4">
            Download my complete curriculum vitae to explore my professional background, technical competencies, and key achievements.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="bg-black/50 border border-red-900/40 hover:border-red-500/50 rounded-2xl p-8 md:p-12 text-center shadow-2xl backdrop-blur-md max-w-3xl mx-auto flex flex-col items-center transition-all duration-300"
        >
          <div className="w-20 h-20 bg-theme-red/20 rounded-full flex items-center justify-center mb-6 text-theme-red border border-theme-red/30 shadow-lg shadow-red-900/30 animate-pulse">
            <i className="fas fa-file-pdf text-4xl"></i>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {site.name} — CV
          </h3>
          <p className="text-red-400 font-semibold text-lg mb-6">
            {site.role} • {site.location}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-sm font-medium">
              React.js & Tailwind CSS
            </span>
            <span className="px-4 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-sm font-medium">
              Aptech Certified (ADSE)
            </span>
            <span className="px-4 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full text-sm font-medium">
              RESTful API Integration
            </span>
          </div>

          <motion.a
            href={site.resumePdf}
            download="Akojuru_Godsent_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] animate-shine text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-red-900/50 hover:shadow-red-600/60 transition-all duration-300 border border-white/20"
          >
            <i className="fas fa-download mr-3 text-xl"></i>
            Download Resume (PDF)
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
