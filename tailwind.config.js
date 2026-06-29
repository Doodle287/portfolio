/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05060d',
        panel: '#0a0c18',
        brand: { 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5' },
        iris: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
        fuchsia: { 400: '#e879f9', 500: '#d946ef' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(99,102,241,0.45)',
        'glow-lg': '0 0 90px -10px rgba(99,102,241,0.5)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '70%,100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 38s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.22,1,0.36,1) infinite',
      },
    },
  },
  plugins: [],
}
