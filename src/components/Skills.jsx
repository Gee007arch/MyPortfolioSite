import { useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundCircles from './specials/BackgroundCircles';
import TechOrbit from './specials/TechOrbit';
import { fadeInUp, staggerContainer, hoverLift } from '../utils/motion';

const Skills = () => {
  const sectionRef = useRef(null);

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

      <motion.div 
        className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 w-full relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 relative inline-block w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shimmer-animate inline-block relative z-10">Skills & Expertise</h2>
          <TechOrbit className="-left-8 -top-8 w-24 h-24 opacity-20" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            I've developed a diverse skill set across multiple technologies and frameworks to deliver comprehensive solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-theme-red pb-2 inline-block">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  variants={fadeInUp}
                  whileHover={hoverLift}
                >
                  <SkillCard skill={skill} isVisible={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-theme-red pb-2 inline-block">Tools & Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <motion.div 
                  key={tool.name} 
                  variants={fadeInUp}
                  whileHover={hoverLift}
                >
                  <SkillCard skill={tool} isVisible={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
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
          <img src={skill.icon} alt={skill.name} loading="lazy" decoding="async" className="w-full h-full object-contain" />
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
