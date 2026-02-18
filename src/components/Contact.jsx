import { useState } from 'react';
import BackgroundCircles from './BackgroundCircles';

const Contact = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/forms/contact.php', {
        method: 'POST',
        body: new FormData(e.target)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error:', error);
      // For static demo purposes if PHP is not available
      setStatus({ type: 'error', message: 'Could not connect to the server. (PHP backend required)' });
    } finally {
      setIsSubmitting(false);
      
      // Clear notification after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-theme-off-black text-white relative overflow-hidden">
      <BackgroundCircles variant="contact" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Abuja FCT, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">eberegodsent@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-theme-red rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+234 818 929 1855</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/geeofficial69" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/50">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/godsent-akojuru" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/50">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
                <a href="https://github.com/Gee007arch" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/50">
                  <i className="fab fa-github text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-theme-red rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/50">
                  <i className="fab fa-dribbble text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-theme-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/30 transform hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {status.message && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 animate-fade-in ${
          status.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        } text-white font-medium`}>
          {status.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
