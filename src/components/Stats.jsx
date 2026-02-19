import { useEffect, useRef, useState } from 'react';
import BackgroundCircles from './specials/BackgroundCircles';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="stats" className="section-padding bg-theme-red text-white relative overflow-hidden" ref={statsRef}>
      <BackgroundCircles variant="stats" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Achievements</h2>
          <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem end={232} label="Happy Clients" shouldAnimate={hasAnimated} />
          <StatItem end={521} label="Projects Completed" shouldAnimate={hasAnimated} />
          <StatItem end={1463} label="Hours of Support" shouldAnimate={hasAnimated} />
          <StatItem end={25} label="Awards Won" shouldAnimate={hasAnimated} />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ end, label, shouldAnimate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [shouldAnimate, end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-theme-paper-white mb-2">{count}</div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default Stats;
