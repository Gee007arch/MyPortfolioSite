import { useEffect, useRef, useState } from 'react';
import BackgroundCircles from './BackgroundCircles';

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
    { name: 'HTML', percent: 97, icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'Tailwind CSS', percent: 95, icon: 'assets/img/tailwindcss-mark.96ee6a5a.svg', color: 'text-blue-500', isImage: true },
    { name: 'JavaScript', percent: 80, icon: 'fab fa-js', color: 'text-yellow-400' },
    { name: 'TypeScript', percent: 80, icon: 'assets/img/ts-logo-256.svg', color: 'text-blue-400', isImage: true },
    { name: 'React', percent: 85, icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Next.js', percent: 75, icon: 'assets/img/nextjs.svg', color: 'text-theme-paper-white', isImage: true },
    { name: 'SQL', percent: 70, icon: 'fas fa-database', color: 'text-green-400' },
    { name: 'API Integration', percent: 80, icon: 'fas fa-network-wired', color: 'text-green-500' },
  ];

  const tools = [
    { name: 'Version Control (Git)', percent: 85, icon: 'fab fa-git-alt', color: 'text-red-500' },
    { name: 'Team Collaboration', percent: 90, icon: 'fas fa-users', color: 'text-blue-300' },
    { name: 'Project Management', percent: 80, icon: 'fas fa-tasks', color: 'text-purple-400' },
    { name: 'Decision-making', percent: 85, icon: 'fas fa-lightbulb', color: 'text-yellow-300' },
  ];

  return (
    <section id="skills" className="section-padding bg-theme-deep-blood relative overflow-hidden" ref={sectionRef}>
      <BackgroundCircles variant="skills" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse skill set across multiple technologies and frameworks to deliver comprehensive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] [animation-delay:200ms]">
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-theme-red pb-2 inline-block">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <SkillCard skill={skill} isVisible={isVisible} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up [animation-fill-mode:forwards] [animation-delay:400ms]">
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-theme-red pb-2 inline-block">Tools & Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div key={tool.name} className="transform hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <SkillCard skill={tool} isVisible={isVisible} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, isVisible }) => {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (skill.percent / 100) * circumference;

  return (
    <div className="bg-black/40 p-4 rounded-xl border border-red-900/20 flex items-center space-x-4 hover:border-red-500/50 transition-colors group">
      <div className={`text-3xl ${skill.color} animate-bounce-slow flex items-center justify-center w-10 h-10`}>
        {skill.isImage ? (
          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
        ) : (
          <i className={skill.icon}></i>
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-bold text-lg mb-1">{skill.name}</h4>
        <div className="text-gray-400 text-sm">Proficiency</div>
      </div>
      <div className="relative flex items-center justify-center">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#ff0000"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ 
              strokeDashoffset: isVisible ? strokeDashoffset : circumference,
              transition: 'stroke-dashoffset 1.5s ease-out'
            }}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <span className="absolute text-xs font-bold text-white">{skill.percent}%</span>
      </div>
    </div>
  );
};

export default Skills;
