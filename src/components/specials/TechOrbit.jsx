import { motion } from 'framer-motion';

const TechOrbit = ({ className = "" }) => {
  return (
    <motion.div 
      className={`absolute opacity-20 md:opacity-30 pointer-events-none ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" stroke="url(#orbitGradient)" strokeWidth="1" strokeDasharray="4 6" />
        <motion.circle 
          cx="50" cy="50" r="30" 
          stroke="#ef4444" strokeWidth="0.5" 
          strokeDasharray="10 10" 
          animate={{ rotate: -360 }}
          style={{ transformOrigin: "50% 50%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="50" cy="5" r="3" fill="#ef4444" />
        
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default TechOrbit;
