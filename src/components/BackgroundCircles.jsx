import React from 'react';

const BackgroundCircles = ({ variant = 'default' }) => {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] right-[20%] w-24 h-24 bg-[#500000] rounded-full opacity-80 "></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] md:right-0 w-[500px] h-[500px] md:w-[500px] md:h-[500px] bg-[#FF0000] rounded-full opacity-100"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-[#800000] rounded-full opacity-60 "></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full opacity-20 "></div>
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-800 rounded-full opacity-30 blur-2xl"></div>
             <div className="absolute top-[15%] right-[20%] w-24 h-24 bg-[#500000] rounded-full opacity-80 blur-xl"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-64 h-64 bg-[#800000] rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-red-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950 rounded-full opacity-10 blur-[100px]"></div>
      </div>
    );
  }

  if (variant === 'stats') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-slate-800 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-red-900 rounded-full opacity-20 blur-2xl"></div>
      </div>
    );
  }

  if (variant === 'skills') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-900 rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gray-800 rounded-full opacity-30 blur-2xl"></div>
      </div>
    );
  }

  if (variant === 'resume') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-red-800 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-900 rounded-full opacity-40 blur-3xl"></div>
      </div>
    );
  }

  if (variant === 'portfolio') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-red-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-60 h-60 bg-gray-800 rounded-full opacity-30 blur-2xl"></div>
      </div>
    );
  }

  if (variant === 'services') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-900 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-700 rounded-full opacity-20 blur-2xl"></div>
      </div>
    );
  }

  if (variant === 'testimonials') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full opacity-50 blur-3xl"></div>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-600 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-900 rounded-full opacity-20 blur-3xl"></div>
      </div>
    );
  }
  
  if (variant === 'footer') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-red-900 rounded-full opacity-20 blur-2xl"></div>
      </div>
    );
  }

  // Default variant (generic)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-900 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-800 rounded-full opacity-10 blur-2xl"></div>
    </div>
  );
};

export default BackgroundCircles;
