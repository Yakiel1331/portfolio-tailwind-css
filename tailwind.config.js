/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },

    
    extend: {
      colors: {
        primary : '#14b8a6',
        dark : '#1e293b',
        secondary : '#64748b'
      },
      screens: {
        '2xl': '1140px',
      },
      fontFamily: {
        greyqo: ['Grey Qo'],
        moderustic:['Moderustic'],
      },
    },
  },
  plugins: [],
}

