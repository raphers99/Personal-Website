'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences } from '@/data/experience';
import { ExperienceModal } from './ExperienceModal';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experience" className="relative py-28 px-6 sm:px-10 rule-t">
      <div className="max-w-container mx-auto">
        <ExperienceModal experience={selected} onClose={() => setSelected(null)} />

        <div className="flex items-baseline justify-between mb-12">
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ember">
            § 02 · Record
          </span>
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ink-faint">
            Chronological · descending
          </span>
        </div>

        <h2 className="font-display text-[44px] sm:text-[56px] leading-[1.02] tracking-tight text-ink mb-14">
          The <span className="italic">ledger</span>
          <span className="text-ember">.</span>
        </h2>

        <ol ref={ref} className="space-y-0">
          {experiences.map((exp, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setSelected(exp)}
                  className="group w-full text-left rule-t py-8 grid grid-cols-12 gap-4 sm:gap-8 hover:bg-paper-panel/40 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4"
                >
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-[11px] text-ember">{num}</span>
                  </div>

                  {/* Period & location */}
                  <div className="col-span-10 sm:col-span-3">
                    <p className="font-mono text-[12px] text-ink-mute num tracking-tight">
                      {exp.period}
                    </p>
                    <p className="font-mono text-[10px] text-ink-faint mt-1 uppercase tracking-widest2">
                      {exp.location}
                    </p>
                  </div>

                  {/* Role & description */}
                  <div className="col-span-12 sm:col-span-8">
                    <h3 className="font-display text-[28px] sm:text-[32px] leading-[1.1] text-ink group-hover:text-ember transition-colors">
                      {exp.role}
                      <span className="text-ink-mute">  —  </span>
                      <span className="italic text-ink-mute group-hover:text-ink transition-colors">
                        {exp.organization}
                      </span>
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/65 max-w-prose">
                      {exp.description}
                    </p>
                    <p className="mt-4 font-mono uppercase tracking-widest2 text-[10px] text-ink-faint group-hover:text-ember transition-colors">
                      Read full entry  →
                    </p>
                  </div>
                </button>
              </motion.li>
            );
          })}
          <li className="rule-t" />
        </ol>
      </div>
    </section>
  );
}
