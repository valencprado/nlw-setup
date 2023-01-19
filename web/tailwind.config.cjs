/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
        background: '#09090A',
        habit: '#fff873',
        habitt: '#fcf44c',
        habittt: '#faf025',
        habitttt: '#ffda0a',
        habittttt: '#ffd100',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
