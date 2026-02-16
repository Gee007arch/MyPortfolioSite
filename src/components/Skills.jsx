import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'Tailwind CSS', percent: 85 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'API Integration', percent: 85 },
  ];

  const tools = [
    { name: 'Version Control (Git)', percent: 85 },
    { name: 'Team Collaboration', percent: 90 },
    { name: 'Project Management', percent: 80 },
    { name: 'Decision-making', percent: 85 },
  ];

  return (
    <section id="skills" className="section-padding bg-theme-off-black relative overflow-hidden" ref={sectionRef}>
      {/* Skills Specific Circles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-900 rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gray-800 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse skill set across multiple technologies and frameworks to deliver comprehensive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percent={skill.percent} isVisible={isVisible} />
              ))}
            </div>
          </div>
          
          {/* Design Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Tools & Soft Skills</h3>
            <div className="space-y-6">
              {tools.map((tool) => (
                <SkillBar key={tool.name} name={tool.name} percent={tool.percent} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, percent, isVisible }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-300">{name}</span>
        <span className="text-theme-red font-semibold">{percent}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-red-600 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${percent}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
