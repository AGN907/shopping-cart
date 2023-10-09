/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'fluid': 'repeat(auto-fit, minmax(100px, 1fr))'
      },
      screens: {
        'xs': '320px'
      }
    },
  },
  plugins: [],
}

