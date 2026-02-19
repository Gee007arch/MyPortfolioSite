import { motion } from 'framer-motion';
import BackgroundCircles from './specials/BackgroundCircles';
import TechOrbit from './specials/TechOrbit';
import { fadeInUp, staggerContainer, slideInLeft } from '../utils/motion';


const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-theme-off-black to-theme-deep-blood relative overflow-hidden group/section">
      <BackgroundCircles variant="about" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center my-12 relative inline-block w-full">
          <h2 className="text-4xl lg:text-5xl font-bold text-white text-shimmer-animate text-center inline-block relative z-10">About Me</h2>
          <TechOrbit className="-right-12 -top-10 w-24 h-24 opacity-20" />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            variants={slideInLeft}
            className="relative group w-full max-w-[500px] hidden lg:block lg:h-[600px] mx-auto lg:mx-0 top-0 rounded-2xl shadow-2xl border border-red-900/30 bg-fixed bg-no-repeat"
            style={{ backgroundImage: "url('/assets/img/profile-img.jpeg')" }}
          >
            <div className="absolute inset-0 -z-10 w-full h-full bg-black/10 "></div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-theme-red rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 z-10 hover:bg-red-600 transition-colors duration-300 cursor-pointer  animate-bounce-slow"
            >
              <i className="fas fa-code text-white text-2xl animate-pulse"></i>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="" >
            <h3 className="text-3xl font-bold text-white mb-6">Gee Dev</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed hover:text-gray-300 transition-colors duration-300">
           As an Aptech-certified Software Engineer (ADSE) with a background in Telecommunication Science, I don't just build websites—I engineer high-performance digital environments. Operating under the name Gee Dev, I specialize in the React ecosystem, blending the structural rigor of the SDLC with the creative flair of modern UI trends. From glassmorphism-styled logic engines to fluid, hardware-accelerated animations, I write clean, scalable code designed to solve real-world business problems. Currently honing my craft at CodeAlpha, I bring a scientist’s precision to every pixel-perfect clone and custom API integration I build.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(153, 27, 27, 0.3)" }}
                className="bg-black/20 p-4 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all duration-300 group/card"
              >
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-user-tag"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Role:</strong> Front End Developer</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fab fa-github"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>GitHub:</strong> <a href="https://github.com/Gee007arch" className="text-red-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Gee007arch</a></span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-phone"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Phone:</strong> +234 818 929 1855</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Location:</strong> Abuja FCT, Nigeria</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(153, 27, 27, 0.3)" }}
                className="bg-black/20 p-4 rounded-lg border border-red-900/20 hover:border-red-500/50 transition-all duration-300 group/card"
              >
                <ul className="space-y-4">
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-language"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Languages:</strong> English </span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Preferred Work Mode:</strong> Remote</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Email:</strong> eberegodsent@gmail.com</span>
                  </li>
                  <li className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red group-hover/item:bg-theme-red group-hover/item:text-white transition-all duration-300">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300"><strong>Freelance:</strong> Available</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-red-900/10 p-6 rounded-xl border-l-4 border-theme-red hover:bg-red-900/20 transition-colors duration-300 hover:shadow-lg hover:shadow-red-900/10"
            >
              <p className="text-gray-300 italic">
                "My biggest achievement lies in my ability to reduce project turnaround time by optimizing component reusability, ultimately delivering scalable applications that have measurably improved user retention."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
