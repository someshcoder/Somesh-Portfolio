'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Student Union Application',
    description:
      'A full-stack student union platform with event management, announcements, student participation, and role-based access for admins and users.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/Student-Union.webp',
    github: 'https://github.com/someshcoder/student-union-application',
    category: 'Full Stack',
    accent: '#3b82f6',
    imageHeight: 340,
  },
  {
    title: 'E-commerce Website',
    description:
      'A full-featured e-commerce platform with product management, shopping cart, and secure checkout.',
    tech: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    image: '/E-Commerce.webp',
    github: 'https://github.com/someshcoder/E-commerce.git',
    category: 'Full Stack',
    accent: '#8b5cf6',
    imageHeight: 340,
  },
  {
    title: 'Real Estate Application',
    description:
      'Modern real estate platform with property listings, advanced search, and interactive maps.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
    image: '/Real-Estate.png',
    github: 'https://github.com/someshcoder/Real-Estate-Application.git',
    category: 'Full Stack',
    accent: '#06b6d4',
    imageHeight: 340,
  },
  {
    title: 'Learning Management System',
    description:
      'Comprehensive LMS with course management, video streaming, and progress tracking.',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    image: '/LMS.jpg',
    github: 'https://github.com/someshcoder/Learning-Management-System.git',
    category: 'Full Stack',
    accent: '#10b981',
    imageHeight: 340,
  },
  {
    title: 'Memory Card Game',
    description:
      'Interactive memory card game with multiple difficulty levels and score tracking.',
    tech: ['React', 'CSS3', 'JavaScript', 'Local Storage'],
    image: '/Memory-Card.png',
    github: 'https://github.com/someshcoder/Memory-Card-Game.git',
    category: 'Frontend',
    accent: '#f59e0b',
    imageHeight: 340,
  },
];

const filters = ['All', 'Full Stack', 'Frontend'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #080810 0%, #0a0a18 50%, #080810 100%)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '10%', left: '5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(147,51,234,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Selected Works
          </div>

          <h2
            className="font-black mb-4 leading-none"
            style={{
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Featured{' '}
            </span>
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </h2>

          <div
            className="h-px w-20 mx-auto mb-5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }}
          />
          <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: 15 }}>
            A selection of my recent work — built with passion and purpose
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                color: activeFilter === filter ? '#fff' : 'rgba(148,163,184,0.6)',
                background: activeFilter === filter
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                  : 'rgba(255,255,255,0.03)',
                border: activeFilter === filter
                  ? '1px solid rgba(99,102,241,0.5)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: activeFilter === filter ? '0 4px 16px rgba(99,102,241,0.25)' : 'none',
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #0f1020 0%, #0a0a18 100%)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = project.accent + '50';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 48px ${project.accent}18`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* ── Full image — fixed height same for all ── */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ background: '#0a0a18', height: project.imageHeight }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    {/* Subtle bottom fade to blend into card body */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                      style={{ background: 'linear-gradient(to bottom, transparent, #0f1020)' }}
                    />

                    {/* Category badge */}
                    <div
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                      style={{
                        background: `${project.accent}18`,
                        border: `1px solid ${project.accent}45`,
                        color: project.accent,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div className="flex flex-col flex-1 p-6">

                    {/* Title row */}
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="font-bold text-xl leading-tight"
                        style={{
                          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                          color: '#f1f5f9',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = project.accent}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#f1f5f9'}
                      >
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        style={{ color: 'rgba(148,163,184,0.25)', flexShrink: 0, marginTop: 3 }}
                      />
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: 'rgba(148,163,184,0.6)' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(148,163,184,0.6)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Repository button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}99)`,
                        boxShadow: `0 4px 16px ${project.accent}30`,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 6px 24px ${project.accent}50`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 16px ${project.accent}30`;
                      }}
                    >
                      <Github size={16} />
                      View Repository
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── View More ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com/someshcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(99,102,241,0.08)';
              el.style.borderColor = 'rgba(99,102,241,0.4)';
              el.style.boxShadow = '0 8px 28px rgba(99,102,241,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(255,255,255,0.03)';
              el.style.borderColor = 'rgba(255,255,255,0.1)';
              el.style.boxShadow = 'none';
            }}
          >
            <Github size={17} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}