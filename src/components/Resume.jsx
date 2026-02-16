const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      {/* Resume Specific Circles */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-red-800 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-900 rounded-full opacity-40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Experience</h3>
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
              />
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-8">
              <ResumeItem 
                title="Advanced Diploma in Software Engineering"
                company="Aptech Ltd, Area 11, Garki, Abuja"
                date="Sep 2023 - Oct 2025"
                description="Practical training in software engineering and modern web development."
                list={[
                  "Focused on React, Tailwind CSS, and API integration",
                  "Hands-on projects and collaborative development"
                ]}
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeItem = ({ title, company, date, description, list }) => {
  return (
    <div className="relative pl-8 border-l-2 border-theme-red">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-theme-red rounded-full"></div>
      <div className="bg-black/40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-900/20 hover:border-red-500/30">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-red-400 font-semibold mb-2">{company} • {date}</p>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
