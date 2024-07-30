/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#0B192F',
        AAprimary: "#0b192f",
        AAsecondary: "#64ffda",
        AAError: "#ff6489",
        AAtertiary: "#112340",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
        navColor : "#183153",
        'custom-purple' : "#B392F0"
      },
      boxShadow: {
        'custom-inset': 'inset 0 -1px 0 #134977',
      },
    },
  },
  plugins: [],
}

