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
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking in search engines. Technical SEO audits and optimization strategies.",
      icon: "fa-search",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions. AWS, Google Cloud, and Azure expertise for optimal performance.",
      icon: "fa-cloud",
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
    <section id="services" className="section-padding bg-theme-slate-contrast relative overflow-hidden">
      {/* Services Specific Circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-700 rounded-full opacity-20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-800 hover:border-red-500/30 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-theme-red transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
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
