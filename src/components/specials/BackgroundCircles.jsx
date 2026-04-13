import React from 'react';

const BackgroundCircles = ({ variant = 'default' }) => {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-32 h-32 bg-[#500000] rounded-full opacity-60 animate-float-slow"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] md:right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF0000] rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#800000] rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-600 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-white rounded-full opacity-5 animate-ping"></div>
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-theme-off-black/50 to-theme-deep-blood/50 mix-blend-overlay"></div>
        <div className="absolute top-10 left-10 w-56 h-56 bg-red-900 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-[#500000] rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#800000] rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-950 rounded-full opacity-40 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900 rounded-full opacity-5 animate-pulse"></div>
      </div>
    );
  }

  if (variant === 'stats') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-10 w-56 h-56 bg-red-900 rounded-full opacity-15 animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-slate-700 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>
    );
  }

  if (variant === 'skills') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-900 rounded-full opacity-15 transform -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-red-600 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-red-300 rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-theme-red rounded-full opacity-5 animate-bounce-slow"></div>
      </div>
    );
  }

  if (variant === 'resume') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-red-900 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-950 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-red-900 rounded-full opacity-40 animate-pulse-slow"></div>
      </div>
    );
  }

  if (variant === 'portfolio') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-red-900 rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-red-900 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute top-10 left-1/3 w-32 h-32 bg-red-800 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>
    );
  }

  if (variant === 'services') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-theme-red-hover rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-theme-red-hover rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-theme-red-hover rounded-full opacity-15 animate-float-delayed"></div>
      </div>
    );
  }

  if (variant === 'testimonials') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-red-900 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-600 rounded-full opacity-10 animate-float-delayed"></div>
        
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-red-700 rounded-full opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-400 rounded-full opacity-60 animate-float-slow"></div>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-0%] left-1/4 w-80 h-80 bg-red-300 rounded-full opacity-10 animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-red-600 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-red-900 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-theme-off-black rounded-full opacity-80 border border-red-900/20 animate-float-slow"></div>
      </div>
    );
  }
  
  if (variant === 'footer') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-red-900 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-red-900 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-red-800 rounded-full opacity-20 animate-float-delayed"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-900 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-800 rounded-full opacity-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-800 rounded-full opacity-5 animate-pulse-slow"></div>
    </div>
  );
};

export default BackgroundCircles;
