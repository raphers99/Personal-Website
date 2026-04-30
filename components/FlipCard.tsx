'use client';

import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  href?: string;
}

export function FlipCard({ title, subtitle, description, bullets, href }: FlipCardProps) {
  const handleCardClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <motion.div
      className="cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleCardClick}
    >
      <div className="bg-navy/50 border border-emerald/30 rounded-lg p-8 hover:border-emerald/60 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
        <div className="mb-6">
          <h3 className="font-bold text-[24px] text-white mb-2">{title}</h3>
          <p className="text-[14px] text-emerald font-medium mb-4">{subtitle}</p>
          <p className="text-[15px] text-white/70 leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-[13px] text-white/70 leading-relaxed">
              <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-emerald flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {href && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(href, '_blank');
            }}
            className="w-full bg-emerald text-navy font-semibold py-3 px-6 rounded-md hover:bg-emerald/90 transition-all duration-200 text-[14px]"
          >
            View Project →
          </button>
        )}
      </div>
    </motion.div>
  );
}
