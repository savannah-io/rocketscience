/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF6B00',
        'rs-black': '#111111',
        'rs-white': '#FFFFFF',
      },
      fontFamily: {
        'glitch': ['Rubik Glitch', 'cursive'],
      },
    },
  },
  plugins: [],
} 