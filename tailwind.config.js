/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-right': 'moveRight 1s ease-in-out infinite',
      },
      keyframes: {
        moveRight: {
          '0%': { tranform: 'translateX(-60px)' },
          '100%': { tranform: 'translateX(calc(100vw + 60px))' },
        },
      },
      translate: {
        'running-pepe': 'calc(100vw + 60px)',
      },
      backgroundImage: {
        'r-gradient-bb': 'radial-gradient(black, blue)',
        'drugs-sol': "url('../public/images/new-logo.png')",
        'cursor-drugz': "url('../public/images/cursor1.svg')",
      },
    },
  },
  plugins: [],
}
