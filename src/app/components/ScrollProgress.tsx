'use client';

import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);
  const [visible, setVisible] = useState(false);

  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track percentage for the label
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setPercentage(Math.round(v * 100));
    setVisible(v > 0.01); // hide pill at very top
  });

  // Glow opacity — brighter as user scrolls more
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.9]);

  return (
    <>
      {/* ── Main progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px]" style={{ background: 'rgba(255,255,255,0.04)' }}>

        {/* Glow layer behind bar */}
        <motion.div
          className="absolute inset-0 origin-left"
          style={{
            scaleX,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
            filter: 'blur(4px)',
            opacity: glowOpacity,
          }}
        />

        {/* Main bar */}
        <motion.div
          className="absolute inset-0 origin-left"
          style={{
            scaleX,
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
          }}
        />

        {/* Glowing tip dot at the leading edge */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full pointer-events-none"
          style={{
            left: `calc(${percentage}% - 4px)`,
            background: '#f472b6',
            boxShadow: '0 0 8px #f472b6, 0 0 16px #a78bfa',
            opacity: visible ? 1 : 0,
            transition: 'left 0.05s linear, opacity 0.2s',
          }}
        />
      </div>

      {/* ── Floating percentage pill ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -8 }}
        transition={{ duration: 0.25 }}
        className="fixed top-4 right-4 z-50 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold tabular-nums pointer-events-none select-none"
        style={{
          background: 'rgba(10,10,24,0.85)',
          border: '1px solid rgba(167,139,250,0.25)',
          backdropFilter: 'blur(10px)',
          color: '#a78bfa',
          boxShadow: '0 2px 12px rgba(99,102,241,0.15)',
        }}
      >
        {/* Mini gradient dot */}
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #60a5fa, #f472b6)' }}
        />
        {percentage}%
      </motion.div>
    </>
  );
}