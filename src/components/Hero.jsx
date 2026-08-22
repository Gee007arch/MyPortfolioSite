import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "./specials/BackgroundCircles";
import TechOrbit from "./specials/TechOrbit";
import { fadeInUp, staggerContainer, slideInRight } from "../utils/motion";
import { site, socialLinks } from "../data/siteConfig";

const Hero = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const texts = [
      "Front-End Developer",
      "React Developer",
      "Web Designer",
      "Graphics Designer",
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    let deleteSpeed = 50;
    let pauseTime = 2000;
    let timeoutId;

    const typeWriter = () => {
      const currentText = texts[textIndex];
      const typedText = typedTextRef.current;

      if (!typedText) return;

      if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = deleteSpeed;
      } else {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      timeoutId = setTimeout(typeWriter, typeSpeed);
    };

    timeoutId = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-theme-off-black overflow-hidden"
    >
      <BackgroundCircles variant="hero" />

      <div className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 w-full relative z-10 flex flex-col md:flex-row gap-4 items-center">
        <motion.div
          className="flex-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white mb-5 relative inline-block"
          >
            Hi, I'm{" "}
            <span className="font-lobster italic text-shimmer-animate relative z-10">
              {" "}
              {site.firstName}
            </span>
            <TechOrbit className="-right-4 -top-6 md:-right-12 md:-top-8 w-20 h-20 md:w-32 md:h-32" />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-3xl text-gray-300 mb-8 max-w-lg "
          >
            <span
              ref={typedTextRef}
              className=" font-bold lg:text-5xl  bg-gradient-to-b from-theme-paper-white  to-theme-red bg-clip-text text-transparent"
            ></span>
            <span className="animate-pulse text-red-500">|</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mb-8 flex flex-col items-center"
          >
            <p className="text-white font-semibold mb-4 text-xl">Find Me on</p>
            <div className="flex space-x-5 md:space-x-10">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group relative text-white transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-red-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                  <i
                    className={`${link.icon} text-3xl relative z-10 group-hover:text-red-500 group-hover:scale-110 transition-transform duration-300`}
                  ></i>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-row gap-4 items-center justify-center group transform hover:translate-x-2 transition-transform duration-300"
          >
            <a
              href="#contact"
              className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] animate-shine text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] active:scale-95 border-2 border-transparent hover:border-white/20 group-hover:scale-110 group-hover:rotate-12 "
            >
              Hire me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative hidden md:flex justify-center md:justify-end flex-1"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="relative z-10 w-full max-w-md rounded-full">
            <img
              src={site.images.hero}
              alt={site.name}
              width="512"
              height="640"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
