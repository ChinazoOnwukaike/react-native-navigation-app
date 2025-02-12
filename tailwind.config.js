/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-black": ["worksans-black", "sans-serif"],
        "work-light": ["worksans-light", "sans-serif"],
        "work-medium": ["worksans-medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
