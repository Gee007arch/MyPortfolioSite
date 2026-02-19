import BackgroundCircles from './specials/BackgroundCircles';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-theme-off-black to-theme-dark text-white py-12 relative overflow-hidden">
      <BackgroundCircles variant="footer" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <h3 className="text-2xl font-bold mb-4 hover:text-theme-red transition-colors duration-300 cursor-default">Akojuru Godsent</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Creating exceptional digital experiences through innovative design and development solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://x.com/geeofficial69" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.facebook.com/share/1GTjETc9X4/" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.instagram.com/gee_official_gram?igsh=YXR1b3hjMXVqZmg3" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/godsent-akojuru-9b87b9367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/Gee007arch" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              &copy; 2026 Akojuru Godsent. All rights reserved. | Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
