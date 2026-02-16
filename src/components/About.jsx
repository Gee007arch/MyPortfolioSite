const About = () => {
  return (
    <section id="about" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      {/* About Specific Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-800 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-red-900 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950 rounded-full opacity-10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Front End Developer specializing in React and API integration, focused on crafting user-friendly interfaces that drive engagement and functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-red-800 to-black rounded-2xl shadow-2xl overflow-hidden border border-red-900/30">
              <img src="assets/img/profile-img.jpg" alt="Akojuru Godsent" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-theme-red rounded-full flex items-center justify-center shadow-lg shadow-red-900/50">
              <i className="fas fa-code text-white text-2xl"></i>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Front End Developer</h3>
            <p className="text-lg text-gray-400 mb-8">
              Front End Developer specializing in React and API integration, with a strong focus on user interface design. 
              Created responsive applications that significantly improved user engagement and functionality. Proven ability to deliver high-quality code and enhance overall user experience.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-user-tag text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Role:</strong> Front End Developer</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fab fa-github text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>GitHub:</strong> <a href="https://github.com/Gee007arch" className="text-red-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Gee007arch</a></span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-phone text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Phone:</strong> +234 818 929 1855</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map-marker-alt text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Location:</strong> Abuja FCT, Nigeria</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-language text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Languages:</strong> English (Professional)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-graduation-cap text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Degree:</strong> Advanced Diploma (Software Engineering); BSc (Telecommunication Science)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-envelope text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Email:</strong> eberegodsent@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-briefcase text-theme-red mr-3"></i>
                    <span className="text-gray-300"><strong>Freelance:</strong> Available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              I'm always eager to learn new technologies and take on challenging projects. 
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
