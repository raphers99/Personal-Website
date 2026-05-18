import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#0E0E0C',
          panel: '#16140F',
          edge: '#1F1C16',
        },
        ink: {
          DEFAULT: '#F5F1E8',
          mute: '#9C968A',
          faint: '#5A564E',
        },
        ember: {
          DEFAULT: '#E07B47',
          dim: '#A85A30',
        },
        rule: 'rgba(245, 241, 232, 0.12)',
        // Legacy aliases to avoid breaking lingering refs
        navy: { DEFAULT: '#0E0E0C', light: '#16140F', dark: '#0A0907' },
        emerald: '#E07B47',
        accent: { DEFAULT: '#E07B47', light: '#EE9468', dark: '#A85A30' },
        textPrimary: '#F5F1E8',
        textMuted: '#9C968A',
      },
      fontFamily: {
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', '"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Newsreader"', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1200px',
        prose: '640px',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;
