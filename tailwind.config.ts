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
          DEFAULT: '#0B1F3B',
          light: '#132A50',
          dark: '#071528',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        emerald: '#10B981',
        offwhite: '#F7F7F5',
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
