'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-navy relative overflow-hidden">
      {/* Subtle grid texture - reduced opacity */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient behind headshot */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 70% 40%, rgba(100, 255, 218, 0.15), transparent 40%), radial-gradient(circle at 85% 60%, rgba(124, 131, 253, 0.1), transparent 35%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <div className="max-w-container mx-auto px-6 pt-24 pb-20 relative w-full">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-10 sm:gap-16">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-xl"
          >
            {/* Name */}
            <motion.h1
              variants={fadeUp}
              custom={0.15}
              className="font-display text-[56px] sm:text-[72px] font-bold leading-[1.05] tracking-tight mb-3"
              style={{ color: '#E6F1FF' }}
            >
              Joseph Raphael
            </motion.h1>

            {/* Headline */}
            <motion.div variants={fadeUp} custom={0.25}>
              <p className="text-[15px] sm:text-[17px] font-medium mb-2" style={{ color: '#64FFDA' }}>
                Student at Tulane University
              </p>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={0.35}
              className="text-[15px] sm:text-[16px] mb-12 leading-relaxed"
              style={{ color: '#8892B0' }}
            >
              UK and US citizen. Finance focused.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.45}
              className="flex flex-wrap gap-3"
            >
              {/* Primary - Resume */}
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: '#64FFDA',
                  color: '#0A192F',
                  boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(100, 255, 218, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.2)';
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>

              {/* Secondary - LinkedIn */}
              <a
                href="https://www.linkedin.com/in/josephraphael04"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-md transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#64FFDA',
                  border: '1px solid rgba(100, 255, 218, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7C83FD';
                  e.currentTarget.style.color = '#7C83FD';
                  e.currentTarget.style.background = 'rgba(124, 131, 253, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.4)';
                  e.currentTarget.style.color = '#64FFDA';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              {/* Secondary - Email */}
              <a
                href="mailto:jraphael1@tulane.edu"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-md transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#64FFDA',
                  border: '1px solid rgba(100, 255, 218, 0.4)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#7C83FD';
                  e.currentTarget.style.color = '#7C83FD';
                  e.currentTarget.style.background = 'rgba(124, 131, 253, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.4)';
                  e.currentTarget.style.color = '#64FFDA';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Headshot with Parallax + Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            style={{ y }}
            className="flex-shrink-0 relative"
          >
            {/* Multi-layered ambient glow */}
            <div
              className="absolute inset-0 -z-0"
              style={{
                background:
                  'radial-gradient(ellipse at 60% 30%, rgba(100, 255, 218, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 40% 60%, rgba(124, 131, 253, 0.15) 0%, transparent 50%)',
                filter: 'blur(60px)',
                transform: 'scale(1.2)',
              }}
            />

            {/* Soft outer aura */}
            <div
              className="absolute inset-0 -z-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
                transform: 'scale(1.4)',
              }}
            />

            <div
              className="relative w-[300px] h-[390px] sm:w-[460px] sm:h-[580px]"
              style={{
                filter:
                  'drop-shadow(0 25px 50px rgba(0,0,0,0.7)) drop-shadow(0 10px 25px rgba(100,255,218,0.18))',
                maskImage:
                  'linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0.5) 95%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, black 0%, black 75%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0.5) 95%, transparent 100%)',
              }}
            >
              <Image
                src="/headshot_nobg.png"
                alt="Joseph Raphael"
                width={460}
                height={580}
                className="w-full h-full object-contain object-bottom"
                style={{
                  filter: 'contrast(1.08) saturate(1.1) brightness(1.02)',
                }}
                priority
              />
            </div>

            {/* Bottom blend gradient overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 25, 47, 0.4) 50%, rgba(10, 25, 47, 1) 100%)',
              }}
            />

            {/* Subtle floating particles for depth */}
            <motion.div
              className="absolute top-10 right-10 w-2 h-2 rounded-full"
              style={{ background: 'rgba(100, 255, 218, 0.6)', boxShadow: '0 0 10px rgba(100, 255, 218, 0.8)' }}
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-32 left-4 w-1.5 h-1.5 rounded-full"
              style={{ background: 'rgba(124, 131, 253, 0.6)', boxShadow: '0 0 8px rgba(124, 131, 253, 0.8)' }}
              animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
