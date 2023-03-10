/** @type {import('tailwindcss').Config} */
module.exports = {
  //Specify the file formats where tailwind shoudl work
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
