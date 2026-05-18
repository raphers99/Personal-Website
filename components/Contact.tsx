'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Toast } from './Toast';

interface ContactLink {
  label: string;
  value: string;
  href?: string;
  copy?: boolean;
  download?: boolean;
}

const links: ContactLink[] = [
  { label: 'Personal',  value: 'jrapha04@yahoo.com',     copy: true },
  { label: 'University', value: 'jraphael1@tulane.edu',  copy: true },
  { label: 'Telephone', value: '504.239.9852',           href: 'tel:5042399852', copy: true },
  { label: 'LinkedIn',  value: 'linkedin.com/in/josephraphael04', href: 'https://www.linkedin.com/in/josephraphael04' },
  { label: 'Résumé',    value: 'resume.pdf',             href: '/resume.pdf', download: true },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [toast, setToast] = useState<string | null>(null);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setToast(`${label} copied`);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-10 rule-t">
      <div className="max-w-container mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ember">
            § 04 · Contact
          </span>
          <span className="font-mono uppercase tracking-widest2 text-[10.5px] text-ink-faint">
            Open to summer 2026
          </span>
        </div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-[60px] sm:text-[88px] leading-[0.95] tracking-tight text-ink">
              Let&rsquo;s
              <br />
              <span className="italic text-ember">correspond</span>
              <span className="text-ember">.</span>
            </h2>

            <p className="mt-8 font-serif text-[20px] leading-relaxed text-ink/75 max-w-prose">
              Open to summer internship conversations in venture capital, sales
              &amp; trading, and wealth management. Letters welcome at any of
              the addresses below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:rule-l lg:pl-10"
          >
            <ul className="space-y-0">
              {links.map((link, i) => {
                const isCopy = link.copy && !link.href?.startsWith('http');
                const Inner = (
                  <>
                    <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint w-24 shrink-0">
                      {link.label}
                    </span>
                    <span className="font-serif text-[16px] text-ink group-hover:text-ember transition-colors flex-1 break-all">
                      {link.value}
                    </span>
                    <span className="font-mono text-[10px] text-ink-faint group-hover:text-ember transition-colors">
                      {isCopy ? 'COPY' : link.download ? '↓' : '↗'}
                    </span>
                  </>
                );

                return (
                  <li key={link.label} className={i === 0 ? '' : 'rule-t'}>
                    {isCopy ? (
                      <button
                        type="button"
                        onClick={() => handleCopy(link.value, link.label)}
                        className="group flex items-baseline gap-4 w-full py-4 text-left"
                      >
                        {Inner}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        download={link.download}
                        className="group flex items-baseline gap-4 w-full py-4"
                      >
                        {Inner}
                      </a>
                    )}
                  </li>
                );
              })}
              <li className="rule-t" />
            </ul>
          </motion.div>
        </div>

        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </div>
    </section>
  );
}
