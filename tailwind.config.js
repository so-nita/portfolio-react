/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#0B192F',
      },
      boxShadow: {
        'custom-inset': 'inset 0 -1px 0 #134977',
      },
    },
  },
  plugins: [],
}

