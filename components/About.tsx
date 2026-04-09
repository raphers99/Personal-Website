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

          <div className="max-w-2xl">
            <p className="text-[18px] sm:text-[20px] font-medium text-navy leading-relaxed mb-6">
              Tulane University sophomore studying Economics with a minor in Artificial Intelligence —
              3.77 GPA, Dean&apos;s List, Alpha Lambda Delta and Omicron Delta Epsilon honor societies.
            </p>

            <div className="space-y-4 text-[15px] text-navy/65 leading-relaxed">
              <p>
                Spent a semester fundraising face-to-face on the streets of Sydney — became top
                performer company-wide, then took that same competitive drive into SaaS sales and
                university leadership back in New Orleans.
              </p>
              <p>
                Drawn to financial markets, venture capital, and the role data plays in how capital
                allocates. Incoming VC intern at Alumni Ventures in London, Summer 2026.
              </p>
              <p>
                UK and US citizen. Currently building WaveRow, a student housing marketplace for
                Tulane — taking a real market problem from idea to product.
              </p>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '3.77', label: 'GPA' },
              { value: 'Econ + AI', label: 'Double Track' },
              { value: 'UK & US', label: 'Citizenship' },
              { value: '2028', label: 'Class of' },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-navy/10 pl-4">
                <div className="text-[22px] font-bold text-navy">{stat.value}</div>
                <div className="text-[12px] text-navy/50 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
