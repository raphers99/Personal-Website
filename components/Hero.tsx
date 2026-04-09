'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-navy relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-accent border border-accent/30 bg-accent/10 rounded-full px-3.5 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Incoming VC Intern &mdash; Alumni Ventures &apos;26
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-[52px] sm:text-[60px] font-bold text-white leading-[1.05] tracking-tight mb-4"
            >
              Joseph Raphael
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="text-[20px] sm:text-[22px] font-medium text-white/80 mb-3"
            >
              Economics & AI @ Tulane
            </motion.p>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="text-[15px] sm:text-[16px] text-white/50 mb-10 leading-relaxed"
            >
              Building at the intersection of markets, data, and software
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-white text-navy text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-white/90 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/josephraphael04"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-white/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="mailto:jraphael1@tulane.edu"
                className="inline-flex items-center gap-2 border border-white/20 text-white text-[13px] font-semibold px-5 py-2.5 rounded-md hover:bg-white/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/headshot.jpg"
                alt="Joseph Raphael"
                width={200}
                height={200}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
