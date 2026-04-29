'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';


export default function Volunteer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="volunteer" className="py-24 px-6 bg-offwhite">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-10">
            Volunteer
          </p>

          {/* Content */}
          <div className="max-w-2xl mb-10">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="text-[20px] font-bold text-navy">
                The Tekanda Foundation
              </h3>
              <span className="text-[13px] text-navy/45">Foundation of Goodness</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[13px] text-navy/40 font-medium">Nov – Dec 2023</span>
              <span className="text-[11px] text-navy/35">·</span>
              <span className="text-[13px] text-navy/40">Ahangama, Sri Lanka</span>
            </div>

            <p className="text-[15px] text-navy/65 leading-relaxed mb-6">
              Inaugural volunteer for a charity operating in remote schools across southern Sri Lanka,
              working directly with underserved communities to expand access to education and opportunity.
            </p>

            <ul className="space-y-3">
              {[
                'Led English lessons for classes of 60 children aged 6–15 in remote village schools',
                'Coached cricket to groups of girls, many of whom had never played sport in an organised setting',
                'Taught technology and entrepreneurial skills to adult learners, focusing on practical digital literacy',
                'Developed teaching, mentoring, and cross-cultural communication skills while living in a local community',
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-navy/65 leading-relaxed">
                  <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
