const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "assets/img/testimonials/testimonials-1.jpg",
      quote: "Akojuru delivered an exceptional front-end experience that exceeded our expectations. His attention to detail and technical expertise made all the difference."
    },
    {
      name: "Michael Chen",
      role: "Founder, DesignStudio",
      image: "assets/img/testimonials/testimonials-2.jpg",
      quote: "Working with Akojuru was a pleasure. He understood our vision perfectly and brought it to life with beautiful, functional designs."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateCorp",
      image: "assets/img/testimonials/testimonials-3.jpg",
      quote: "Akojuru's technical skills and problem-solving abilities are outstanding. He delivered our project on time and within budget."
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-theme-paper-white text-gray-900 relative overflow-hidden">
      {/* Testimonials Specific Circles - Subtle Light Mode */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from satisfied clients who have worked with me on various projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 shadow-md" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-red-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
