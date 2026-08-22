import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    let slideTimer;
    let doneTimer;
    const started = Date.now();
    const minVisibleMs = 400;
    const slideMs = 500;

    const beginExit = () => {
      const wait = Math.max(0, minVisibleMs - (Date.now() - started));
      slideTimer = setTimeout(() => {
        setSlideOut(true);
        doneTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, slideMs);
      }, wait);
    };

    if (document.readyState === 'complete') {
      beginExit();
    } else {
      window.addEventListener('load', beginExit, { once: true });
    }

    const fallback = setTimeout(beginExit, 1500);

    return () => {
      window.removeEventListener('load', beginExit);
      clearTimeout(fallback);
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-theme-off-black transition-transform duration-500 ease-in-out ${
        slideOut ? '-translate-y-full' : 'translate-y-0'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      style={{
        clipPath: slideOut ? 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' : 'none',
      }}
    >
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-8xl font-bold text-white mb-4 animate-pulse">
          <span className="font-lobster italic text-theme-red">GEE</span> DEV
        </h1>
        <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-theme-red animate-[width_2s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
        </div>
        <p className="mt-4 text-gray-400 text-sm tracking-widest uppercase">Loading Experience...</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-red-900 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-theme-deep-blood rounded-full opacity-30 animate-float-delayed"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
