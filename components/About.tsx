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
              Originally from Stroud, Gloucestershire — a small town in the English countryside.
              Studied GCSEs and A Levels at Cheltenham College before taking a gap year that shaped
              how I think about independence and risk.
            </p>
            <p>
              Spent six weeks volunteering in Sri Lanka, then travelled Southeast Asia across
              Thailand, Vietnam, and Indonesia. Moved to Australia where I worked in face-to-face
              sales at Black Classic, and bartended at the SCG and Allianz Stadium — saving enough
              to travel South America solo. Explored Mexico extensively, then Peru with a friend —
              Machu Picchu, the Amazon rainforest. Living alone in Sydney, building a life from
              scratch, taught me more about myself than anything else.
            </p>
            <p>
              Brought that same drive back to New Orleans. Became top performer company-wide in
              fundraising, then moved into SaaS sales and university leadership. Drawn to financial
              markets, venture capital, and the role data plays in how capital allocates. Incoming
              VC intern at Alumni Ventures in London, Summer 2026. UK and US citizen. Currently
              building WaveRow, a student housing marketplace for Tulane — taking a real market
              problem from idea to product.
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
