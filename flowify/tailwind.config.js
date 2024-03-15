/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#363B4E',
        'second-color': '#4F3B78',
        'pText-color': '#927FBF',
        'h1Text-color': '#C4BBF0',
        'heroBackground-color': '#4E364D',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

