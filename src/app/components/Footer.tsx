'use client';

import { motion, useInView } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useRef } from 'react';

const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const socialLinks = [
  { icon: Github, href: 'https://github.com/someshcoder/someshcoder.git', label: 'GitHub', hoverColor: '#94a3b8' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/somesh-bhatnagar-18b388328/', label: 'LinkedIn', hoverColor: '#60a5fa' },
  { icon: Mail, href: 'mailto:someshbhatnagar535@gmail.com', label: 'Email', hoverColor: '#f87171' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #08080f 0%, #050508 100%)' }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 30%, rgba(167,139,250,0.4) 70%, transparent 100%)' }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 200, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">

        {/* ── Main row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6"
        >

          {/* Brand */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: '"SF Pro Display", -apple-system, sans-serif',
                }}
              >
                SB
              </span>
            </motion.div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.5)', maxWidth: 200 }}>
              Crafting modern, responsive web experiences with passion and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: 'rgba(148,163,184,0.4)' }}
            >
              Navigate
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {quickLinks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-xs font-medium transition-all duration-200 relative group"
                    style={{ color: 'rgba(148,163,184,0.55)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = '#a78bfa'}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(148,163,184,0.55)'}
                  >
                    {item}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)' }}
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h4
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: 'rgba(148,163,184,0.4)' }}
            >
              Connect
            </h4>
            <p className="text-xs" style={{ color: 'rgba(148,163,184,0.5)' }}>
              someshbhatnagar535@gmail.com
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    color: 'rgba(148,163,184,0.55)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = hoverColor;
                    el.style.borderColor = hoverColor + '40';
                    el.style.background = hoverColor + '10';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = 'rgba(148,163,184,0.55)';
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p
            className="flex items-center gap-1.5 text-xs"
            style={{ color: 'rgba(148,163,184,0.35)' }}
          >
            © {currentYear} Somesh Bhatnagar
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            Made with
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            </motion.span>
            in Agra
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              color: '#a5b4fc',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'rgba(99,102,241,0.15)';
              el.style.boxShadow = '0 4px 16px rgba(99,102,241,0.2)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = 'rgba(99,102,241,0.08)';
              el.style.boxShadow = 'none';
            }}
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}