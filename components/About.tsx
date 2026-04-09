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
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-6">
            About
          </p>

          <div className="max-w-2xl space-y-4 text-[15px] text-navy/70 leading-relaxed">
            <p className="text-[18px] sm:text-[19px] font-medium text-navy leading-relaxed">
              Sophomore at Tulane University studying Economics with a minor in Artificial
              Intelligence (GPA 3.77). Incoming VC intern at Alumni Ventures, London, Summer 2026.
              Currently building WaveRow, a student housing marketplace for Tulane — identifying a
              gap in the market and taking it through product development end to end.
            </p>
            <p>
              Finance is where I am headed. Specifically interested in capital markets, venture,
              and the data infrastructure that sits behind investment decisions. Actively pursuing
              internships and opportunities across wealth management, sales and trading, and private
              investment — and welcome any conversation with people working in those spaces.
            </p>
            <p>
              Career so far has been built on performance. Top performer company-wide in
              face-to-face fundraising. Moved into SaaS sales at a govtech startup. Taken on
              academic leadership at Tulane. Each role has been chosen deliberately to build a
              foundation of commercial judgment, resilience, and execution.
            </p>
            <p>
              Background spans three continents. Grew up in Gloucestershire, England, studied at
              Cheltenham College, then spent a gap year working independently across Australia,
              Southeast Asia, and South America before bringing that same drive to New Orleans.
              That experience built a global perspective and a genuine comfort with ambiguity and
              high-stakes environments.
            </p>
            <p>
              UK and US citizen. Dual perspective, international network, and a long-term
              commitment to finance.
            </p>
          </div>

          {/* Stat row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '3.77', label: 'GPA' },
              { value: 'Economics with AI Minor', label: 'Degree' },
              { value: 'UK & US', label: 'Citizenship' },
              { value: '2028', label: 'Class of' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-navy/10 pl-4">
                <div className="text-[18px] font-bold text-navy leading-tight">{stat.value}</div>
                <div className="text-[12px] text-navy/50 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
