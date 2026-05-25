import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: '#04060c',
        panel: '#080d18',
        card: '#0b1220',
        border: 'rgba(255,255,255,0.07)',
        cyan: {
          DEFAULT: '#22d3ee',
          50: 'rgba(34,211,238,0.05)',
          100: 'rgba(34,211,238,0.1)',
          200: 'rgba(34,211,238,0.2)',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        violet: {
          DEFAULT: '#7c3aed',
          100: 'rgba(124,58,237,0.1)',
          300: '#a78bfa',
          500: '#7c3aed',
        },
        emerald: {
          DEFAULT: '#10b981',
          100: 'rgba(16,185,129,0.1)',
          300: '#6ee7b7',
          500: '#10b981',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.15), 0 20px 60px rgba(0,0,0,0.5)',
        'glow-sm': '0 0 20px rgba(34,211,238,0.1)',
        'glow-violet': '0 0 40px rgba(124,58,237,0.15)',
        panel: '0 24px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        card: '0 8px 40px rgba(0,0,0,0.4)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(34,211,238,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.06) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, rgba(34,211,238,0.04) 0%, transparent 60%)',
        'cyan-gradient': 'linear-gradient(135deg, #22d3ee, #818cf8)',
        'violet-gradient': 'linear-gradient(135deg, #a78bfa, #22d3ee)',
        'emerald-gradient': 'linear-gradient(135deg, #10b981, #22d3ee)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34,211,238,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(34,211,238,0.5), 0 0 80px rgba(34,211,238,0.15)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'bar-grow': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4,0,0.2,1) forwards',
        blink: 'blink 1.1s step-end infinite',
        scan: 'scan 8s linear infinite',
        'bar-grow': 'bar-grow 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
        orbit: 'orbit 12s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
