import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import BackgroundCircles from './specials/BackgroundCircles';
import TechOrbit from './specials/TechOrbit';
import { fadeInUp, staggerContainer, hoverLift, hoverScale } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // TODO: Replace these with your actual EmailJS credentials
    // Get them from https://dashboard.emailjs.com/
    const SERVICE_ID ='service_h8ixl0i';
    const TEMPLATE_ID = 'template_lk05uai';
    const PUBLIC_KEY = 'q7zviOibLIMOpCcwM';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.error(error.text);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        
        // Auto-clear only for errors
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 3000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding bg-theme-off-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-theme-deep-blood to-theme-off-black z-0"></div>
      <BackgroundCircles variant="contact" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center my-12 relative inline-block w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-theme-paper-white text-shimmer-animate inline-block relative z-10">Get In Touch</h2>
          <TechOrbit className="-left-8 -top-8 w-24 h-24 opacity-20" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 border-l-4 border-theme-red pl-4">Let's Connect</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={hoverLift}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-theme-red transition-colors duration-300">Location</h4>
                  <p className="text-gray-400">Abuja FCT, Nigeria</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={hoverLift}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-theme-red transition-colors duration-300">Email</h4>
                  <p className="text-gray-400">eberegodsent@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={hoverLift}
                className="flex items-center group"
              >
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-theme-red transition-colors duration-300">Phone</h4>
                  <p className="text-gray-400">+234 818 929 1855</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="mt-12">
              <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/geeofficial69" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/50 group">
                  <i className="fab fa-twitter text-white group-hover:animate-pulse"></i>
                </a>
                <a href="https://www.linkedin.com/in/godsent-akojuru" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/50 group">
                  <i className="fab fa-linkedin text-white group-hover:animate-pulse"></i>
                </a>
                <a href="https://github.com/Gee007arch" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/50 group">
                  <i className="fab fa-github text-white group-hover:animate-pulse"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/50 group">
                  <i className="fab fa-dribbble text-white group-hover:animate-pulse"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-red-900/30 transition-colors duration-300 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:bg-gray-750"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:bg-gray-750"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:bg-gray-750"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none hover:bg-gray-750"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-theme-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/30 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Modal Pop-up */}
      {status.message && status.type === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-gray-900 border border-theme-red rounded-xl p-8 max-w-sm w-full text-center shadow-2xl shadow-red-900/50 transform animate-slide-up">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <i className="fas fa-check text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
            <p className="text-gray-300 mb-6">{status.message}</p>
            <button 
              onClick={() => setStatus({ type: '', message: '' })}
              className="w-full bg-theme-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Toast (keep as toast for errors) */}
      {status.message && status.type === 'error' && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 animate-fade-in bg-red-600 text-white font-medium">
          {status.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
