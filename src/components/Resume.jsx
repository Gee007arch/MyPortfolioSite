import BackgroundCircles from './BackgroundCircles';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-theme-deep-blood relative overflow-hidden">
      <BackgroundCircles variant="resume" />

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
                title="Front End Developer (Intern)"
                company="One Box Media, Gwarimpa, Abuja"
                date="Oct 2025 - Present"
                description="Developing responsive web applications and integrating APIs to enhance user experience."
                list={[
                  "Developed responsive web applications using React and Tailwindcss to improve user engagement",
                  "Integrated APIs to enhance front-end functionality and optimize user experience",
                  "Collaborated with designers to create user-friendly interfaces for improved accessibility",
                  "Assisted in wireframe and prototype creation for new feature development",
                  "Participated in code reviews to uphold quality standards across all projects",
                  "Gathered feedback from team members to drive design improvements effectively",
                  "Updated existing websites with fresh content and refined design elements as necessary"
                ]}
              />
              <ResumeItem 
                title="Professional Travel Manager"
                company="Dreamport, Remote"
                date="Mar 2025 - Aug 2025"
                description="Managed travel logistics and client itineraries with a focus on compliance and customer satisfaction."
                list={[
                  "Coordinated travel arrangements for clients, ensuring smooth logistics and timely bookings",
                  "Assisted in developing travel policies and guidelines for organizational compliance",
                  "Researched destinations, providing clients with tailored itinerary recommendations",
                  "Handled client inquiries, offering support and addressing travel-related concerns promptly"
                ]}
              />
              <ResumeItem 
                title="Receptionist"
                company="Network Operations Center, UNILORIN, Ilorin, Kwara State"
                date="Jan 2022 - Dec 2022"
                description="Managed front-desk operations and administrative tasks to support office efficiency."
                list={[
                  "Greeted and assisted visitors in a professional manner",
                  "Managed incoming calls and directed them to appropriate departments",
                  "Scheduled appointments for staff and maintained calendar updates",
                  "Handled correspondence and distributed mail to relevant personnel",
                  "Maintained a clean and organized reception area for guests",
                  "Assisted with administrative tasks to support office operations"
                ]}
              />
              <ResumeItem 
                title="Sales Rep"
                company="Edinwo Supermarket, Tanke, Ilorin, Kwara State"
                date="Feb 2021 - Nov 2021"
                description="Focused on customer relationship management and achieving sales targets."
                list={[
                  "Developing and maintaining relationships with new and existing customers",
                  "Generating leads and following up on sales inquiries",
                  "Meeting sales targets and objectives set by the company",
                  "Providing product demonstrations and presentations to potential customers",
                  "Negotiating contracts and closing deals",
                  "Keeping accurate records of sales activities and customer interactions"
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
                description="Comprehensive training in full-stack development, software engineering principles, and modern web technologies."
                list={[
                  "Specialized in React ecosystem and enterprise-grade API orchestration",
                  "Deep understanding of the full Software Development Life Cycle (SDLC)",
                  "Practical experience in resolving complex algorithmic logic and database architecture"
                ]}
              />
              <ResumeItem 
                title="Bachelor of Science (BSc.) Telecommunication Science"
                company="University of Ilorin, Ilorin, Kwara State"
                date="Dec 2018 - May 2023"
                description="Studied telecommunication systems, networking protocols, and core computing concepts."
                list={[
                  "Gained foundational knowledge in network operations and system architecture",
                  "Developed analytical and problem-solving skills through technical coursework"
                ]}
              />
              <ResumeItem 
                title="Senior Secondary School Certificate (SSCE)"
                company="Government Science Secondary School, Pyakasa, Maitama, Abuja"
                date="Sep 2015 - Jun 2018"
                description="Completed secondary education with a focus on science subjects."
                list={[
                  "Foundation in mathematics and sciences",
                  "Participated in science club activities"
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
