/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '26': 'repeat(26, minmax(0, 1fr))',
      },
      colors: {
        bg: '#0B1220',
        panel: '#111A2E',
        primary: '#22C55E',
        text: '#F8FAFC',
        muted: '#94A3B8',
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
