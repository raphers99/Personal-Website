'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

export function Toast({ message, duration = 2000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gold text-navy px-5 py-3 rounded-lg font-medium text-[13px] shadow-lg"
    >
      {message}
    </motion.div>
  );
}

export function useToast() {
  const [toast, setToast] = useState<string | null>(null);

  const show = (message: string, duration?: number) => {
    setToast(message);
  };

  const ToastComponent = toast ? (
    <Toast message={toast} onClose={() => setToast(null)} />
  ) : null;

  return { show, ToastComponent };
}
