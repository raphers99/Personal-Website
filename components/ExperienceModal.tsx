'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ExperienceData {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
}

interface ExperienceModalProps {
  experience: ExperienceData | null;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(7, 7, 6, 0.78)', backdropFilter: 'blur(2px)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 flex items-center justify-center px-4 z-50 pointer-events-none"
          >
            <div className="bg-paper rule-t rule-b border-x border-rule max-w-2xl w-full max-h-[88vh] overflow-y-auto pointer-events-auto">
              <div className="px-8 py-7 rule-b flex items-center justify-between">
                <span className="font-mono uppercase tracking-widest2 text-[10px] text-ember">
                  Full entry
                </span>
                <button
                  onClick={onClose}
                  className="font-mono uppercase tracking-widest2 text-[10px] text-ink-mute hover:text-ember ink-link"
                  aria-label="Close"
                >
                  Close ✕
                </button>
              </div>

              <div className="px-8 py-8">
                <h3 className="font-display text-[36px] leading-[1.05] text-ink">
                  {experience.role}
                </h3>
                <p className="font-display italic text-[20px] text-ember mt-1">
                  {experience.organization}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] text-ink-mute">
                  <span><span className="text-ink-faint mr-2">Period</span> <span className="num">{experience.period}</span></span>
                  <span><span className="text-ink-faint mr-2">Location</span> {experience.location}</span>
                </div>

                <p className="mt-6 font-serif text-[17px] leading-relaxed text-ink/80">
                  {experience.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.bullets.map((bullet, i) => (
                    <li key={i} className="grid grid-cols-[24px_1fr] gap-2 text-[15px] leading-relaxed text-ink/75">
                      <span className="font-mono text-[10px] text-ember pt-1.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 py-4 rule-t font-mono text-[10px] uppercase tracking-widest2 text-ink-faint">
                Press ESC to close
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
