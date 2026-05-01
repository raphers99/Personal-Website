'use client';

import { motion } from 'framer-motion';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating orb 1 - teal */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl"
        style={{ background: 'rgba(100, 255, 218, 0.06)' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating orb 2 - purple */}
      <motion.div
        className="absolute bottom-40 left-20 w-40 h-40 rounded-full blur-3xl"
        style={{ background: 'rgba(124, 131, 253, 0.05)' }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating orb 3 - subtle teal */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full blur-2xl"
        style={{ background: 'rgba(100, 255, 218, 0.03)' }}
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
