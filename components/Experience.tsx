'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/data/experience';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-10">
            Experience
          </p>

          <div className="space-y-0 divide-y divide-gray-100">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                className="py-8 grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8"
              >
                {/* Left column */}
                <div>
                  <p className="text-[13px] font-semibold text-navy/40 tabular-nums">
                    {exp.period}
                  </p>
                  <p className="text-[12px] text-navy/35 mt-1">{exp.location}</p>
                </div>

                {/* Right column */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <h3 className="text-[16px] font-semibold text-navy">{exp.role}</h3>
                    <span className="text-[13px] text-navy/50">— {exp.organization}</span>
                  </div>
                  <p className="text-[13px] text-navy/55 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-[13px] text-navy/65 leading-relaxed">
                        <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
