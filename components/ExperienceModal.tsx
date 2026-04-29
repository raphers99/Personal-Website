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
            className="fixed inset-0 bg-black/40 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 flex items-center justify-center px-4 z-50"
          >
            <div className="bg-navy rounded-lg p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto border border-white/10">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="font-display text-[24px] font-bold text-white mb-2">
                {experience.role}
              </h3>
              <p className="text-[14px] text-emerald font-medium mb-3">
                {experience.organization}
              </p>
              <div className="flex flex-wrap gap-3 text-[12px] text-white/60">
                <span>{experience.period}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
            </div>

            <p className="text-[15px] text-white/70 leading-relaxed mb-6">
              {experience.description}
            </p>

            <ul className="space-y-3">
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-white/70 leading-relaxed">
                  <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-emerald flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-[12px] text-white/40 mt-8 pt-4 border-t border-white/10">
              Press ESC to close
            </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
