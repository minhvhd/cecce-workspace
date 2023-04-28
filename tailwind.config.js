/** @type {import('tailwindcss').Config} */
const { guessProductionMode } = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: [
    "./apps/**/*.{html,scss,ts,js}",
    "./libs/**/*.{html,scss,ts,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
