import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return { ref, isInView };
}
