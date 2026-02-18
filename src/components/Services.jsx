import BackgroundCircles from './BackgroundCircles';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies. Responsive, fast, and scalable solutions tailored to your business needs.",
      icon: "fa-code",
      color: "from-red-600 to-red-800"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android. Native performance with shared codebase for faster development.",
      icon: "fa-mobile-alt",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive experiences. From wireframes to pixel-perfect implementations.",
      icon: "fa-paint-brush",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Graphics Design",
      description: "Creative visual designs that communicate your brand's message effectively. Brand identity, logo design, and visual content creation.",
      icon: "fa-paint-brush",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Database Management",
      description: "Robust database design, optimization, and management services. Ensure data integrity, security, and high performance across SQL and NoSQL systems.",
      icon: "fa-database",
      color: "from-red-700 to-red-900"
    },
    {
      title: "Consulting & Support",
      description: "Technical consulting and ongoing support for your digital projects. Strategic guidance for technology decisions.",
      icon: "fa-headset",
      color: "from-gray-800 to-black"
    }
  ];

  return (
    <section id="services" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center my-12 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block">Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-black/40 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-800 hover:border-red-500/30 group opacity-0 animate-slide-up [animation-fill-mode:forwards] hover:bg-slate-800/80"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <i className={`fas ${service.icon} text-white text-2xl group-hover:animate-pulse`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-theme-red transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
