'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Code as Code2, Sparkles, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  'Clean, maintainable code',
  'On-time delivery',
  'Responsive & mobile-first',
  'REST API integration',
  'Scalable architecture',
  'Open to freelance & full-time',
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: 0.4 + i * 0.15, duration: 0.65, ease: 'easeOut' },
    }),
  } as Variants;

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >

          {/* ── Left: Photo card ── */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
              <div className="relative p-8 sm:p-10 bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-sm rounded-3xl border border-gray-800/60 shadow-2xl">

                {/* Photo */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-8">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-700/40 relative z-10"
                    animate={{ y: [0, -14, 0], scale: [1, 1.04, 1] }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.4 } }}
                  >
                    <Image src="/SB.jpeg" alt="Somesh Bhatnagar" fill className="object-cover" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/30 blur-2xl -z-10"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.85, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Name & title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">
                    Somesh Bhatnagar
                  </h3>
                  <p className="text-blue-400 font-medium text-lg sm:text-xl">
                    MERN Stack Developer
                  </p>
                </div>

                {/* Highlight checklist */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="flex items-center gap-1.5"
                    >
                      <CheckCircle size={12} className="text-blue-400 flex-shrink-0" />
                      <span className="text-xs text-gray-400">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Bio paragraphs */}
            <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
              <p>
                Hello! I&apos;m a dedicated{' '}
                <span className="text-blue-400 font-semibold">Full Stack MERN Developer</span>{' '}
                who specializes in building fast, scalable, and visually polished web applications
                from the ground up — handling everything from database design to pixel-perfect UI.
              </p>
              <p>
                I have hands-on experience delivering{' '}
                <span className="text-purple-400 font-semibold">real-world projects</span>{' '}
                including e-commerce platforms, learning management systems, real estate apps,
                and student portals — each built with performance, security, and user experience
                at the forefront.
              </p>
              <p>
                Whether you need a{' '}
                <span className="text-pink-400 font-semibold">new product built from scratch</span>,
                an existing application improved, or a complex feature integrated — I bring both
                technical depth and a strong work ethic to every project I take on.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-5 mt-10">
              {[
                {
                  icon: GraduationCap,
                  title: 'Education',
                  color: 'blue',
                  text: 'Pursuing BCA (Bachelor of Computer Applications). My academic foundation in computer science, combined with constant self-learning and hands-on project work, has given me both the theory and practical skills to build production-grade software.',
                },
                {
                  icon: Briefcase,
                  title: 'Work Approach',
                  color: 'purple',
                  text: 'I treat every client project as if it were my own product. I communicate clearly, deliver on time, write clean and well-documented code, and stay involved until the project is exactly where it needs to be — no shortcuts.',
                },
                {
                  icon: Code2,
                  title: 'Technical Skills',
                  color: 'pink',
                  text: 'Proficient in React, Node.js, Express, MongoDB, Tailwind CSS, REST APIs, JWT authentication, and more. I stay current with modern development practices and continuously expand my skill set.',
                },
                {
                  icon: Sparkles,
                  title: 'What Sets Me Apart',
                  color: 'blue',
                  text: 'Beyond code, I care about the end user. I build responsive, accessible, and performant interfaces that look great on every device — because great software is not just functional, it&apos;s a pleasure to use.',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br from-${item.color}-950/40 to-gray-950 border border-${item.color}-900/30 backdrop-blur-sm transition-all duration-300`}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`p-4 bg-${item.color}-900/30 rounded-xl flex-shrink-0`}>
                        <Icon className={`text-${item.color}-400`} size={26} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}