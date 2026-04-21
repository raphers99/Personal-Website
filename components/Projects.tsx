'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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
    title: 'AI Smart Calendar',
    stack: ['Next.js', 'TypeScript', 'OpenAI', 'Vercel'],
    description:
      'A personal AI-powered calendar app that schedules, reschedules, and prioritizes tasks automatically.',
    bullets: [
      'Natural language event creation and smart rescheduling',
      'AI-driven priority scoring and conflict resolution',
    ],
    href: 'https://ai-smart-calendar-nine.vercel.app',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 px-6 bg-offwhite">
      <div className="max-w-container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-10">
            Projects
          </p>

          <div className="grid gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                className={`group bg-white border rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                  project.featured
                    ? 'border-navy/15 p-7 sm:p-8'
                    : 'border-gray-100 p-6'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3
                    className={`font-bold text-navy leading-tight ${
                      project.featured ? 'text-[22px]' : 'text-[17px]'
                    }`}
                  >
                    {project.title}
                    {project.subtitle && (
                      <span className="font-normal text-navy/45 ml-2 text-[15px]">
                        — {project.subtitle}
                      </span>
                    )}
                  </h3>
                  {project.featured && (
                    <span className="flex-shrink-0 text-[10px] font-semibold tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1">
                      Featured
                    </span>
                  )}
                </div>

                <p
                  className={`text-navy/60 leading-relaxed mb-5 ${
                    project.featured ? 'text-[14px]' : 'text-[13px]'
                  }`}
                >
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[13px] text-navy/60 leading-relaxed">
                      <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-navy/50 bg-navy/5 border border-navy/10 rounded-md px-2.5 py-1"
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
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                      Visit
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
