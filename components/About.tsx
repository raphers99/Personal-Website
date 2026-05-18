'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats: Array<[string, string]> = [
  ['Degree', 'Economics, AI minor'],
  ['Citizenship', 'UK · US'],
  ['Class of', '2028'],
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 px-6 sm:px-10 rule-t">
      <div className="max-w-container mx-auto">
        {/* Section marker */}
        <div className="flex items-baseline justify-between mb-12">
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ember">
            § 01 · Profile
          </span>
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ink-faint">
            On record
          </span>
        </div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[44px] sm:text-[56px] leading-[1.02] tracking-tight text-ink">
              A short
              <br />
              <span className="italic">dossier</span>
              <span className="text-ember">.</span>
            </h2>

            <div className="mt-10 space-y-4">
              {stats.map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                  className="rule-t pt-3 flex items-baseline justify-between"
                >
                  <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
                    {k}
                  </span>
                  <span className="font-serif text-[18px] text-ink num">{v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:rule-l lg:pl-12 space-y-6"
          >
            <p className="font-display text-[26px] sm:text-[30px] leading-[1.25] text-ink first-letter:font-display first-letter:text-ember first-letter:text-[64px] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9]">
              Sophomore at Tulane University studying Economics with a minor
              in Artificial Intelligence.
            </p>
            <p className="text-[17px] leading-relaxed text-ink/75">
              Originally from Gloucestershire, England. Studied at Cheltenham
              College, then took a gap year working across Australia, Southeast
              Asia, and South America — including six weeks volunteering in Sri
              Lanka. Worked in face-to-face sales in Australia before bringing
              that drive to New Orleans.
            </p>
            <p className="text-[17px] leading-relaxed text-ink/75">
              Now at Tulane as a Teaching Assistant and Manager of the Data
              Peer Mentor program, leading peer support across the department.
              Drawn to capital markets, venture, and the data infrastructure
              behind investment decisions.
            </p>

            <div className="rule-t pt-5">
              <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
                Filed
              </span>
              <span className="font-mono text-[11px] text-ink-mute ml-3 num">
                New Orleans · 2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
