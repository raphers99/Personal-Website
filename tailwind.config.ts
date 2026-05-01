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
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B',
        },
        accent: {
          DEFAULT: '#64FFDA',
          light: '#9BFFE8',
          dark: '#4DD9B5',
        },
        secondary: {
          DEFAULT: '#7C83FD',
          light: '#9DA3FE',
          dark: '#5B63DD',
        },
        emerald: '#64FFDA',
        offwhite: '#0A192F',
        textPrimary: '#E6F1FF',
        textMuted: '#8892B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
};

export default config;
