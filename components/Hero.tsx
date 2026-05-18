'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section id="top" className="relative min-h-screen flex items-end pt-28 pb-16 px-6 sm:px-10">
      <div className="max-w-container mx-auto w-full">
        {/* Top meta strip */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-baseline justify-between mb-10 rule-b pb-4"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-widest2 text-ink-mute">
            Vol. 04 · No. 02
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-widest2 text-ink-mute hidden sm:inline">
            {today}
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-widest2 text-ember">
            Tulane / New Orleans
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left: masthead */}
          <div className="lg:col-span-8">
            <motion.p
              {...fadeUp(0.05)}
              className="font-mono uppercase tracking-widest2 text-[11px] text-ember mb-6"
            >
              § A profile in progress
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-display text-[15vw] sm:text-[10vw] lg:text-[128px] leading-[0.92] tracking-tight text-ink"
            >
              Joseph
              <br />
              <span className="italic text-ember/95">Raphael</span>
              <span className="text-ember">.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.22)}
              className="font-serif text-[20px] sm:text-[24px] leading-snug text-ink/85 mt-8 max-w-prose"
            >
              Student at Tulane University.
              <span className="text-ink-mute"> Reading economics and artificial intelligence.</span>
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-baseline gap-2 font-mono uppercase tracking-widest2 text-[11px] text-paper bg-ember px-5 py-3 hover:bg-ink transition-colors"
              >
                Download Résumé
                <span className="group-hover:translate-x-0.5 transition-transform">↓</span>
              </a>
              <a
                href="#about"
                className="font-mono uppercase tracking-widest2 text-[11px] text-ink-mute ink-link hover:text-ink"
              >
                Read the file →
              </a>
            </motion.div>
          </div>

          {/* Right: tearsheet */}
          <motion.aside
            {...fadeUp(0.4)}
            className="lg:col-span-4 lg:rule-l lg:pl-10"
          >
            <div className="rule-b pb-3 mb-5 flex items-baseline justify-between">
              <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
                Tearsheet
              </span>
              <span className="font-mono text-[10px] text-ember">●</span>
            </div>

            <dl className="space-y-3 font-mono text-[12px]">
              {[
                ['Class of', '2028'],
                ['Concentration', 'Economics · AI minor'],
                ['Citizenship', 'United Kingdom · United States'],
                ['Languages', 'English · French (B1)'],
                ['Based', 'New Orleans, LA'],
                ['Origin', 'Gloucestershire, UK'],
                ['Status', 'Open to summer 2026'],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-3 items-baseline">
                  <dt className="uppercase tracking-widest2 text-[9.5px] text-ink-faint">{k}</dt>
                  <dd className="text-ink num">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rule-t pt-5">
              <p className="font-display italic text-[18px] leading-snug text-ink/85">
                &ldquo;Each role chosen deliberately to build commercial judgment and execution.&rdquo;
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Bottom rule with scroll indicator */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 rule-t pt-4 flex items-baseline justify-between"
        >
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
            ↓ Continue
          </span>
          <span className="font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
            Five sections · Single page
          </span>
        </motion.div>
      </div>

      {/* Decorative headshot, anchored bottom-right of section, faded into paper */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[380px] h-[480px] pointer-events-none select-none">
        <Image
          src="/headshot_nobg.png"
          alt="Joseph Raphael"
          width={460}
          height={580}
          className="w-full h-full object-contain object-bottom"
          style={{
            filter: 'grayscale(0.35) contrast(1.05) brightness(0.95) sepia(0.18)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.4) 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.4) 90%, transparent 100%)',
            opacity: 0.55,
          }}
          priority
        />
      </div>
    </section>
  );
}
