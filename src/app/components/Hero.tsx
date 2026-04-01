'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const roles = [
  'MERN Stack Developer',
  'Full Stack Developer',
  'React Specialist',
  'Problem Solver',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  // Client-side mount handling
  useEffect(() => {
    setMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 75);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // Background particles
  const particles = React.useMemo(() => {
    if (!mounted) return [];
    return [...Array(35)].map(() => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      duration: Math.random() * 12 + 10,
    }));
  }, [mounted, windowSize]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-16 pb-12"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              initial={{ x: particle.x, y: particle.y }}
              animate={{
                y: [particle.y, particle.y - 140],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full">
        
        {/* Available for Work Banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-widest text-center">
              AVAILABLE FOR FREELANCE • OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-blue-400 text-base sm:text-lg mb-2">Hello, I am</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-white">Somesh </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Bhatnagar
              </span>
            </h1>

            {/* Typing Effect */}
            <div className="h-10 sm:h-12 mb-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </h2>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-7">
              {[
                'Full Stack Web Developer',
                'BCA Student',
                '1.5+ Years Experience'
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-gray-900/80 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
              Passionate Full Stack Developer building robust, scalable web applications with clean architecture and modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('projects')}
                className="group px-7 sm:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl font-semibold text-white flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="px-7 sm:px-8 py-3.5 border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all rounded-2xl font-semibold text-gray-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Contact Me
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { Icon: Github, href: 'https://github.com/someshcoder/someshcoder.git' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/somesh-bhatnagar-18b388328/' },
                { Icon: Mail, href: 'mailto:someshbhatnagar535@gmail.com' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-full text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Icon size={19} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="relative flex-shrink-0 mt-6 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent rounded-full blur-3xl opacity-25" />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/60 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src="/Somesh.jpeg"
                  alt="Somesh Bhatnagar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-7 border-2 border-gray-500 rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 bg-blue-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}