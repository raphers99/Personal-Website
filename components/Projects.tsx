'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlipCard } from './FlipCard';

interface Project {
  title: string;
  subtitle?: string;
  stack: string[];
  description: string;
  bullets: string[];
  href?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'WaveRow',
    subtitle: 'Student Housing Marketplace',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    description:
      'A marketplace solving liquidity and trust issues in student housing — subletting, semester leases, and roommate matching in one place.',
    bullets: [
      'Built full-stack marketplace for Tulane students to list and discover short-term housing',
      'Roommate matching system with individual and group profiles',
      'Designed for mobile-first usage with native iOS support via Capacitor',
    ],
    href: 'https://waverow.app',
    featured: true,
  },
  {
    title: 'Rhythm',
    subtitle: 'AI-Powered Smart Calendar',
    stack: ['Next.js', 'TypeScript', 'AI', 'Calendar API'],
    description:
      'An intelligent calendar assistant that learns your scheduling patterns and automatically optimizes your time management with AI-driven insights.',
    bullets: [
      'Natural language event creation and scheduling',
      'AI-powered meeting optimization and time blocking',
      'Smart conflict detection and schedule recommendations',
    ],
    href: 'https://ai-smart-calendar-nine.vercel.app',
    featured: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-16 px-6 bg-navy">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[12px] font-semibold tracking-widest uppercase text-emerald/70 mb-4">
            Projects
          </p>
          <h2 className="font-display text-[36px] sm:text-[44px] font-bold text-white mb-10 leading-tight">
            Featured Work
          </h2>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2, ease: 'easeOut' }}
              >
                {project.featured ? (
                  <FlipCard
                    title={project.title}
                    subtitle={project.subtitle || ''}
                    description={project.description}
                    bullets={project.bullets}
                    href={project.href}
                  />
                ) : (
                  <div className="group bg-navy/50 border border-white/10 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-bold text-[17px] text-white leading-tight">
                        {project.title}
                        {project.subtitle && (
                          <span className="font-normal text-white/45 ml-2 text-[15px]">
                            — {project.subtitle}
                          </span>
                        )}
                      </h3>
                    </div>

                    <p className="text-[13px] text-white/60 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-[13px] text-white/60 leading-relaxed">
                          <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-emerald" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium text-white/50 bg-white/5 border border-white/10 rounded-md px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald hover:text-emerald/80"
                        >
                          Visit
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
