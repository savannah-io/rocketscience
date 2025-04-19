import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(200%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' }
        },
        'subtle-drift': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' }
        }
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-delayed-1': 'glow 2s ease-in-out infinite 0.666s',
        'glow-delayed-2': 'glow 2s ease-in-out infinite 1.333s',
        'subtle-drift': 'subtle-drift 20s ease-in-out infinite',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite'
      },
      fontFamily: {
        'anta': ['Anta', 'sans-serif'],
        'macondo': ['Macondo', 'cursive'],
        'rubik-dirt': ['Rubik Dirt', 'cursive'],
        'rubik-glitch': ['Rubik Glitch', 'cursive'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config 