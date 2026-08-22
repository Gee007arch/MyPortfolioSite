import BackgroundCircles from './specials/BackgroundCircles';
import { testimonials } from '../data/siteConfig';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-theme-deep-blood text-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64  z-0"></div>
      <BackgroundCircles variant="testimonials" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center my-12 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block">What Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Testimonials from satisfied clients who have worked with me on various projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name} 
              className="bg-black/40 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300  opacity-0 animate-slide-up [animation-fill-mode:forwards] transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" className="w-16 h-16 rounded-full object-cover mr-4 shadow-md transition-transform duration-300 hover:scale-110" />
                <div>
                  <h4 className="font-bold text-theme-paper-white">{testimonial.name}</h4>
                  <p className="text-theme-paper-white font-medium">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4 text-yellow-500" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star transform hover:scale-125 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }}></i>
                ))}
              </div>
              <p className="text-theme-paper-white italic leading-relaxed hover:text-theme-paper-white/80 transition-colors duration-300">
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
