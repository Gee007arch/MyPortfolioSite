import BackgroundCircles from './BackgroundCircles';


const About = () => {
  return (
    <section id="about" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Strategic Front-End Developer and Aptech-certified Software Engineer (ADSE), offering a sophisticated command of the React ecosystem and enterprise-grade API orchestration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group h-screen w-auto rounded-2xl shadow-2xl border border-red-900/30">
            <div className="absolute inset-0 bg-contain bg-fixed bg-center bg- bg-[url(assets/img/profile-img.jpeg)] bg-no-repeat" ></div>
            <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-theme-red rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 animate-bounce-slow z-10">
              <i className="fas fa-code text-white text-2xl"></i>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Front End Web Developer</h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              My professional foundation is built upon the rigorous Advanced Diploma in Software Engineering, which provided me with a deep-seated understanding of the full Software Development Life Cycle (SDLC). 
              I have a proven track record of translating abstract business requirements into high-conversion digital products, serving as a primary technical lead for real-life customer requests.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/20 p-4 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-user-tag"></i>
                    </div>
                    <span className="text-gray-300"><strong>Role:</strong> Front End Developer</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fab fa-github"></i>
                    </div>
                    <span className="text-gray-300"><strong>GitHub:</strong> <a href="https://github.com/Gee007arch" className="text-red-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Gee007arch</a></span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-phone"></i>
                    </div>
                    <span className="text-gray-300"><strong>Phone:</strong> +234 818 929 1855</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span className="text-gray-300"><strong>Location:</strong> Abuja FCT, Nigeria</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/20 p-4 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-colors">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-language"></i>
                    </div>
                    <span className="text-gray-300"><strong>English:</strong> Professional</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <span className="text-gray-300"><strong>Degree:</strong> ADSE; BSc. Telecoms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span className="text-gray-300"><strong>Email:</strong> eberegodsent@gmail.com</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center mr-3 text-theme-red">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <span className="text-gray-300"><strong>Freelance:</strong> Available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-900/10 p-6 rounded-xl border-l-4 border-theme-red">
              <p className="text-gray-300 italic">
                "My biggest achievement lies in my ability to reduce project turnaround time by optimizing component reusability, ultimately delivering scalable applications that have measurably improved user retention."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
