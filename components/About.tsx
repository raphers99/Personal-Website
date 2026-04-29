'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 px-6 bg-offwhite">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-emerald/70 mb-3">
            About
          </p>
          <h2 className="font-display text-[32px] sm:text-[38px] font-bold text-white mb-8 leading-tight">
            Background & Context
          </h2>

          <div className="max-w-2xl space-y-5 text-[15px] text-white/70 leading-relaxed">
            <p className="text-[16px] sm:text-[17px] font-medium text-white leading-relaxed">
              Sophomore at Tulane University studying Economics with a minor in Artificial
              Intelligence (GPA 3.77). Incoming VC intern at Alumni Ventures, London, Summer 2026.
              Currently building WaveRow, a student housing marketplace for Tulane.
            </p>
            <p>
              Originally from Gloucestershire, England. Studied at Cheltenham College, took a gap
              year working across Australia, Southeast Asia, and South America — including six weeks
              volunteering in Sri Lanka. Brought that same drive back to New Orleans. Top performer
              in face-to-face fundraising, then moved into SaaS sales and academic leadership.
            </p>
            <p>
              Drawn to capital markets, venture, and the data infrastructure behind investment
              decisions. Each role chosen deliberately to build commercial judgment and execution.
              UK and US citizen.
            </p>
          </div>

          {/* Stat row */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '3.77', label: 'GPA' },
              { value: 'Economics with AI Minor', label: 'Degree' },
              { value: 'UK & US', label: 'Citizenship' },
              { value: '2028', label: 'Class of' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-emerald/30 pl-4"
              >
                <div className="text-[20px] font-bold text-white leading-tight">{stat.value}</div>
                <div className="text-[12px] text-white/50 font-medium mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
