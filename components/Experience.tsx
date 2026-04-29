'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences } from '@/data/experience';
import { ExperienceModal } from './ExperienceModal';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experience" className="py-24 px-6 bg-navy">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <ExperienceModal experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
          <p className="text-[11px] font-semibold tracking-widest uppercase text-emerald/70 mb-4">
            Experience
          </p>
          <h2 className="font-display text-[32px] sm:text-[38px] font-bold text-white mb-10 leading-tight">
            Work History
          </h2>

          <div className="space-y-0 divide-y divide-emerald/10">
            {experiences.map((exp, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                onClick={() => setSelectedExperience(exp)}
                className="w-full py-8 grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 hover:bg-white/5 transition-colors duration-200 text-left group"
              >
                {/* Left column */}
                <div>
                  <p className="text-[13px] font-semibold text-white/40 tabular-nums">
                    {exp.period}
                  </p>
                  <p className="text-[12px] text-white/35 mt-1">{exp.location}</p>
                </div>

                {/* Right column */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <h3 className="text-[16px] font-semibold text-white group-hover:text-emerald transition-colors">{exp.role}</h3>
                    <span className="text-[13px] text-white/50">— {exp.organization}</span>
                  </div>
                  <p className="text-[13px] text-white/55 mb-4">{exp.description}</p>
                  <div className="flex items-center gap-2 text-[12px] text-emerald/70 group-hover:text-emerald transition-colors">
                    Click to view details →
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
