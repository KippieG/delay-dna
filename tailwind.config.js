/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#07090f',
          900: '#0b0d16',
          800: '#0f1320',
          700: '#141a2e',
          600: '#1a2240',
        },
        ecs: {
          red:    '#CC0000',
          redhov: '#a80000',
          redglow:'#CC000040',
          yellow: '#F5A800',
          gold:   '#d4940a',
          ygroup: '#F5A80040',
          light:  '#fff5e6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'ecs-red':    '0 0 24px 0 rgba(204,0,0,0.25)',
        'ecs-yellow': '0 0 24px 0 rgba(245,168,0,0.25)',
      },
    },
  },
  plugins: [],
}
