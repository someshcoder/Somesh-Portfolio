'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'loading' | 'exit'>('enter');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 5500;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercentage(Math.floor(eased * 100));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const enterTimer = setTimeout(() => {
      setPhase('loading');
      requestAnimationFrame(tick);
    }, 300);

    const exitTimer = setTimeout(() => {
      setPhase('exit');
      setIsLoading(false);
      setTimeout(onLoadingComplete, 700);
    }, 6200);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onLoadingComplete]);

  const particles = [
    { left: '10%', top: '20%', size: 3, delay: 0, duration: 3 },
    { left: '85%', top: '15%', size: 2, delay: 0.5, duration: 4 },
    { left: '75%', top: '70%', size: 4, delay: 1, duration: 3.5 },
    { left: '20%', top: '75%', size: 2, delay: 1.5, duration: 2.5 },
    { left: '50%', top: '10%', size: 3, delay: 0.8, duration: 4 },
    { left: '90%', top: '50%', size: 2, delay: 0.3, duration: 3 },
    { left: '5%', top: '50%', size: 4, delay: 1.2, duration: 3.8 },
    { left: '60%', top: '85%', size: 2, delay: 0.6, duration: 2.8 },
  ];

  const TEXT_A = 'SOMESH BHATNAGAR\u00a0\u00a0·\u00a0\u00a0FULL STACK DEVELOPER\u00a0\u00a0·\u00a0\u00a0';
  const TEXT_B = 'FULL STACK DEVELOPER\u00a0\u00a0·\u00a0\u00a0SOMESH BHATNAGAR\u00a0\u00a0·\u00a0\u00a0';

  const marqueeStyle = {
    fontSize: 'clamp(44px, 7vw, 88px)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    color: 'rgba(255,255,255,0.06)',
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    textTransform: 'uppercase' as const,
    userSelect: 'none' as const,
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0a0f 100%)' }}
        >

          {/* ── Ambient blobs ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute rounded-full"
              style={{
                width: 500, height: 500,
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute rounded-full"
              style={{
                width: 400, height: 400,
                top: '30%', left: '60%',
                background: 'radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />
          </div>

          {/* ── Full-screen giant marquee rows ── */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            {/* Row 1 — left → right */}
            <div style={{ overflow: 'hidden', lineHeight: 1.05 }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
              >
                {Array(8).fill(TEXT_A).map((t, i) => (
                  <span key={i} style={marqueeStyle}>{t}</span>
                ))}
              </motion.div>
            </div>

            {/* Row 2 — right → left */}
            <div style={{ overflow: 'hidden', lineHeight: 1.05 }}>
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
              >
                {Array(8).fill(TEXT_B).map((t, i) => (
                  <span key={i} style={marqueeStyle}>{t}</span>
                ))}
              </motion.div>
            </div>

            {/* Row 3 — left → right slow */}
            <div style={{ overflow: 'hidden', lineHeight: 1.05 }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
              >
                {Array(8).fill(TEXT_A).map((t, i) => (
                  <span key={i} style={marqueeStyle}>{t}</span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Floating particles ── */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: p.left, top: p.top,
                width: p.size, height: p.size,
                background: i % 2 === 0 ? 'rgba(59,130,246,0.7)' : 'rgba(147,51,234,0.7)',
              }}
              animate={{ y: [-12, 12, -12], opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}

          {/* ── Subtle grid overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* ── Main content ── */}
          <div className="relative flex flex-col items-center gap-10">

            {/* Logo container */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute pointer-events-none"
                style={{
                  inset: -8,
                  border: '1.5px solid transparent',
                  borderRadius: 28,
                  background: 'linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6), rgba(59,130,246,0.1), rgba(147,51,234,0.6)) border-box',
                }}
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute pointer-events-none"
                style={{
                  inset: -16,
                  border: '1px solid transparent',
                  borderRadius: 36,
                  background: 'linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(180deg, rgba(59,130,246,0.2), rgba(147,51,234,0.4), transparent, rgba(59,130,246,0.2)) border-box',
                }}
              />

              {/* Logo box */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(59,130,246,0.4), 0 0 80px rgba(59,130,246,0.1)',
                    '0 0 50px rgba(147,51,234,0.5), 0 0 100px rgba(147,51,234,0.15)',
                    '0 0 30px rgba(59,130,246,0.4), 0 0 80px rgba(59,130,246,0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-28 h-28 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                  border: '1px solid rgba(59,130,246,0.3)',
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2) 0%, transparent 60%)' }}
                />
                {/* Shimmer sweep */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)',
                    transform: 'skewX(-20deg)',
                  }}
                />
                {/* SB letters */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative z-10 select-none"
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  SB
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Portfolio label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center gap-1"
            >
              <div
                className="text-sm font-semibold tracking-[0.25em] uppercase"
                style={{ color: 'rgba(148,163,184,0.6)' }}
              >
                Portfolio
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), transparent)' }}
              />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex flex-col items-center gap-3 w-56"
            >
              <div
                className="relative w-full h-0.5 rounded-full overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${percentage}%` }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #6366f1)',
                    boxShadow: '0 0 12px rgba(99,102,241,0.8)',
                    transition: 'width 0.05s linear',
                  }}
                />
                <motion.div
                  animate={{ left: `${percentage}%`, opacity: [0.5, 1, 0.5] }}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
                  style={{
                    marginLeft: -6,
                    background: 'rgba(139,92,246,0.9)',
                    filter: 'blur(4px)',
                    transition: 'left 0.05s linear',
                  }}
                />
              </div>
              <motion.span
                className="text-xs font-mono tabular-nums"
                style={{ color: 'rgba(148,163,184,0.5)' }}
              >
                {String(percentage).padStart(3, '0')}%
              </motion.span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}