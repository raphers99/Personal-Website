'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const photos: { src: string; caption: string }[] = [
  // Add your Sri Lanka photos here — drop images into /public/srilanka/
  // Example: { src: '/srilanka/photo1.jpg', caption: 'Teaching English in Ahangama' },
  // Example: { src: '/srilanka/photo2.jpg', caption: 'Cricket coaching session' },
  // Example: { src: '/srilanka/photo3.jpg', caption: 'Foundation of Goodness' },
];

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

          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
            {/* Left: content */}
            <div>
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

            {/* Right: photo grid */}
            <div>
              {photos.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {photos.map((photo, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      className={`rounded-xl overflow-hidden bg-navy/5 ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Placeholder grid — swap out once you add photos */
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-2 aspect-[16/9] rounded-xl bg-navy/5 border border-dashed border-navy/15 flex flex-col items-center justify-center gap-2">
                    <svg className="w-6 h-6 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[11px] text-navy/30 font-medium">Photo coming soon</p>
                  </div>
                  <div className="aspect-square rounded-xl bg-navy/5 border border-dashed border-navy/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-xl bg-navy/5 border border-dashed border-navy/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              )}
              <p className="text-[11px] text-navy/35 mt-3 text-center">
                Ahangama, Sri Lanka &mdash; Nov/Dec 2023
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
