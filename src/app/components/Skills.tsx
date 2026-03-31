'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    dot: '#22d3ee',
    barColor: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'TypeScript', level: 78 },
    ],
  },
  {
    title: 'Backend Development',
    dot: '#4ade80',
    barColor: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Database & Storage',
    dot: '#e879f9',
    barColor: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Auth & Security',
    dot: '#fb923c',
    barColor: 'from-orange-500 to-red-500',
    skills: [
      { name: 'JWT', level: 91 },
      { name: 'Session & Cookies', level: 89 },
    ],
  },
  {
    title: 'Tools & DevOps',
    dot: '#60a5fa',
    barColor: 'from-blue-400 to-indigo-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    title: 'Advanced Concepts',
    dot: '#a78bfa',
    barColor: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Geolocation & Geofencing', level: 79 },
      { name: 'AI Integration', level: 76 },
      { name: 'AI Chatbot Integration', level: 78 },
      { name: 'Jest Testing', level: 83 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #0a0a18 0%, #080810 50%, #0a0a18 100%)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '15%', right: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', left: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.02,
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#a5b4fc',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            What I Work With
          </div>

          <h2
            className="font-black mb-4 leading-none"
            style={{
              fontSize: 'clamp(34px, 6vw, 68px)',
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Skills &{' '}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Technologies
            </span>
          </h2>

          <div
            className="h-px w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
          />
          <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: 15 }}>
            Tools and technologies I use to build things
          </p>
        </motion.div>

        {/* ── Skill Cards Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: catIdx * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div
                className="relative h-full rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, #0f1020 0%, #0c0c1a 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = category.dot + '40';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${category.dot}12`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2.5">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: catIdx * 0.4 }}
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: category.dot, boxShadow: `0 0 8px ${category.dot}` }}
                  />
                  <h3
                    className="font-bold text-base"
                    style={{
                      color: '#e2e8f0',
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span
                          className="text-sm font-medium"
                          style={{ color: 'rgba(203,213,225,0.8)' }}
                        >
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: catIdx * 0.08 + skillIdx * 0.1 + 0.4 }}
                          className="text-xs font-bold tabular-nums"
                          style={{ color: category.dot }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Bar track */}
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.1,
                            delay: catIdx * 0.08 + skillIdx * 0.1 + 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`h-full bg-gradient-to-r ${category.barColor} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer sweep on bar */}
                          <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              repeatDelay: 3 + skillIdx,
                              ease: 'easeInOut',
                            }}
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Tech pill badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'React', color: '#22d3ee' },
            { label: 'Node.js', color: '#4ade80' },
            { label: 'MongoDB', color: '#4ade80' },
            { label: 'TypeScript', color: '#60a5fa' },
            { label: 'Tailwind', color: '#22d3ee' },
            { label: 'Express', color: '#94a3b8' },
            { label: 'JWT', color: '#fb923c' },
            { label: 'REST API', color: '#a78bfa' },
            { label: 'Git', color: '#f97316' },
            { label: 'MySQL', color: '#e879f9' },
            { label: 'Jest', color: '#fb7185' },
          ].map((tech, i) => (
            <motion.span
              key={tech.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold cursor-default transition-all duration-200"
              style={{
                background: `${tech.color}12`,
                border: `1px solid ${tech.color}30`,
                color: tech.color,
              }}
            >
              {tech.label}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}