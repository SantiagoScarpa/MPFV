/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    maxWidth: {
      'content': 'max-content'
    },
    extend: {
      colors: {
        'blue': '#7477AA',
        'skyblue': '#CCD1F2',
        'ochre': '#A0702B',
        'sand': '#F0E6D7',
        'bone': '#FFF5ED'
      }
    },
  },
  plugins: [],
}


