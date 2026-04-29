'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  href?: string;
}

export function FlipCard({ title, subtitle, description, bullets, href }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="h-[400px] cursor-pointer perspective"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{ duration: 0.6, type: 'spring', damping: 20, stiffness: 100 }}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full bg-navy/50 border border-emerald/30 rounded-lg p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <h3 className="font-bold text-[22px] text-white mb-1">{title}</h3>
            <p className="text-[13px] text-emerald font-medium mb-4">{subtitle}</p>
            <p className="text-[14px] text-white/60 leading-relaxed">{description}</p>
          </div>
          <p className="text-[12px] text-emerald/70 font-medium">
            ↻ Click to reveal details
          </p>
        </div>

        {/* Back side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-emerald/10 to-emerald/5 border border-emerald/30 rounded-lg p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-white/80 leading-relaxed">
                <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-emerald flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-emerald hover:text-emerald/80"
              onClick={(e) => e.stopPropagation()}
            >
              Visit →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
