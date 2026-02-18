import BackgroundCircles from './BackgroundCircles';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="resume" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center my-12 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block">Resume</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] [animation-delay:200ms]" data-aos="flip-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-theme-red pl-4">Professional Experience</h3>
            <div className="space-y-8">
              <ResumeItem 
                title="Front End Developer"
                company="One Box Media, Gwarimpa, Abuja"
                date="Oct 2025 - Present"
                description="Developed responsive web applications using React and Tailwind CSS to improve user engagement. Integrated APIs to enhance front-end functionality and optimize user experience."
                list={[
                  "Built responsive interfaces focused on accessibility and usability",
                  "Integrated RESTful APIs to deliver dynamic, real-time features",
                  "Collaborated with designers on wireframes and prototypes",
                  "Participated in code reviews to uphold quality standards"
                ]}
                delay="300"
              />
              <ResumeItem 
                title="Professional Travel Manager"
                company="Dreamport, Remote"
                date="Mar 2025 - Aug 2025"
                description="Coordinated client travel logistics, developed policies, and provided tailored itinerary recommendations while managing inquiries efficiently."
                list={[
                  "Handled end-to-end travel arrangements and timely bookings",
                  "Assisted development of travel policies and compliance guidelines",
                  "Researched destinations and prepared custom itineraries",
                  "Addressed client inquiries and resolved travel concerns"
                ]}
                delay="400"
              />
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] [animation-delay:400ms]" data-aos="flip-left" data-aos-delay="400">
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-theme-red pl-4">Education</h3>
            <div className="space-y-8">
              <ResumeItem 
                title="Advanced Diploma in Software Engineering"
                company="Aptech Ltd, Area 11, Garki, Abuja"
                date="Sep 2023 - Oct 2025"
                description="Practical training in software engineering and modern web development."
                list={[
                  "Focused on React, Tailwind CSS, and API integration",
                  "Deep understanding of the full Software Development Life Cycle (SDLC)",
                  "Practical experience in resolving complex algorithmic logic and database architecture"
                ]}
                delay="500"
              />
              <ResumeItem 
                title="Bachelor of Science in Telecommunication Science"
                company="University of Ilorin, Ilorin, Kwara State"
                date="Dec 2018 - May 2023"
                description="Studied telecommunication systems and core computing concepts with practical applications."
                list={[
                  "Projects exploring networking and systems",
                  "Foundations in software and communication technologies"
                ]}
                delay="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ title, company, date, description, list, delay }) => {
  return (
    <div className="relative pl-8 border-l-2 border-theme-red group" style={{ transitionDelay: `${delay}ms` }}>
      <div className="absolute -left-2 top-0 w-4 h-4 bg-theme-red rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_#ff0000] transition-all duration-300"></div>
      <div className="bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-900/20 hover:border-red-500/50 hover:-translate-y-2 transform">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-theme-red transition-colors duration-300">{title}</h4>
        <p className="text-red-400 font-semibold mb-2">{company} • {date}</p>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {list.map((item, index) => (
            <li key={index} className="hover:text-gray-200 transition-colors duration-200">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
