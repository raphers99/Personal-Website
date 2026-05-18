'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-px z-50 pointer-events-none"
      style={{ background: 'rgba(245, 241, 232, 0.06)' }}
    >
      <div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: 'var(--ember)',
          transition: 'width 80ms linear',
        }}
      />
    </div>
  );
}
