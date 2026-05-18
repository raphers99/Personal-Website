'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  title: string;
  subtitle: string;
  stack: string[];
  description: string;
  bullets: string[];
  href?: string;
}

const projects: Project[] = [
  {
    title: 'WaveRow',
    subtitle: 'Student Housing Marketplace',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Capacitor'],
    description:
      'A marketplace solving liquidity and trust issues in student housing — subletting, semester leases, and roommate matching in one place.',
    bullets: [
      'Built full-stack marketplace for Tulane students to list and discover short-term housing',
      'Roommate matching system with individual and group profiles',
      'Designed for mobile-first usage with native iOS support via Capacitor',
    ],
    href: 'https://waverow.app',
  },
  {
    title: 'Rhythm',
    subtitle: 'AI-Powered Smart Calendar',
    stack: ['Next.js', 'TypeScript', 'AI', 'Calendar API'],
    description:
      'An intelligent calendar assistant that learns scheduling patterns and automatically optimizes time management with AI-driven insights.',
    bullets: [
      'Natural language event creation and scheduling',
      'AI-powered meeting optimization and time blocking',
      'Smart conflict detection and schedule recommendations',
    ],
    href: 'https://ai-smart-calendar-nine.vercel.app',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-10 rule-t">
      <div className="max-w-container mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ember">
            § 03 · Work
          </span>
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ink-faint">
            Side files
          </span>
        </div>

        <h2 className="font-display text-[44px] sm:text-[56px] leading-[1.02] tracking-tight text-ink mb-14">
          Things <span className="italic">built</span>
          <span className="text-ember">.</span>
        </h2>

        <div ref={ref} className="space-y-0">
          {projects.map((p, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rule-t py-10 grid grid-cols-12 gap-4 sm:gap-8"
              >
                <div className="col-span-2 sm:col-span-1">
                  <span className="font-mono text-[11px] text-ember">{num}</span>
                </div>

                <div className="col-span-10 sm:col-span-4">
                  <p className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint mb-2">
                    {p.subtitle}
                  </p>
                  <h3 className="font-display text-[42px] leading-[0.98] text-ink">
                    {p.title}
                    <span className="text-ember">.</span>
                  </h3>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-baseline gap-2 font-mono uppercase tracking-widest2 text-[10.5px] text-ember ink-link"
                    >
                      Visit live
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>

                <div className="col-span-12 sm:col-span-7">
                  <p className="font-serif text-[18px] leading-relaxed text-ink/80 mb-5">
                    {p.description}
                  </p>
                  <ul className="space-y-2.5">
                    {p.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="grid grid-cols-[24px_1fr] gap-2 text-[14px] leading-relaxed text-ink/65"
                      >
                        <span className="font-mono text-[10px] text-ink-faint pt-1.5">
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-widest2 text-ink-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
          <div className="rule-t" />
        </div>
      </div>
    </section>
  );
}
