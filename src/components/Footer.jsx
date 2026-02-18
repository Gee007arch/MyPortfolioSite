import BackgroundCircles from './BackgroundCircles';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <BackgroundCircles variant="footer" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Akojuru Godsent</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Creating exceptional digital experiences through innovative design and development solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; 2026 Akojuru Godsent. All rights reserved. | Built with ❤️ using Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
