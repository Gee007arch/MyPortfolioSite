import { useEffect, useRef } from 'react';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    const texts = [
      'Front End Web Developer',
      'React Developer',
      'Web Designer',
      'Graphics Designer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let deleteSpeed = 50;
    let pauseTime = 2000;
    let timeoutId;

    const typeWriter = () => {
      const currentText = texts[textIndex];
      const typedText = typedTextRef.current;
      
      if (!typedText) return;

      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = deleteSpeed;
      } else {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      timeoutId = setTimeout(typeWriter, typeSpeed);
    };

    timeoutId = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-theme-off-black overflow-hidden">
      <BackgroundCircles variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in ">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
            Hello, I'm <span className="font-lobster italic text-shimmer-animate">Akojuru Godsent</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
          I'm a <span ref={typedTextRef} className="text-white font-semibold"></span>
            <span className="animate-pulse text-red-500">|</span>
          </p>
          
          <div className="mb-8">
            <p className="text-white font-semibold mb-4">Find Me on</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1GTjETc9X4/" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/geeofficial69" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/gee_official_gram?igsh=YXR1b3hjMXVqZmg3" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/godsent-akojuru-9b87b9367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/Gee007arch" className="text-white hover:text-red-500 transition-colors text-xl"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          <div className="flex flex-row gap-4">
            <a href="#contact" className="bg-[#FF0000] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-red-900/50">
              Hire me
            </a>
            <a href="#resume" className="bg-[#FF0000] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-red-900/50">
              Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        {/* <div className="relative flex justify-center md:justify-end">
          <div className="relative z-10 w-full max-w-md">
            <img 
              src="assets/img/profile-img.jpg" 
              alt="Akojuru Godsent" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-black transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div> */}
        
      </div>
    </section>
  );
};

export default Hero;
