/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0f1e',
          800: '#0d1528',
          700: '#111d35',
          600: '#162442',
        },
        dna: {
          blue: '#3b82f6',
          teal: '#14b8a6',
          orange: '#f97316',
          red: '#ef4444',
          green: '#22c55e',
          yellow: '#eab308',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

