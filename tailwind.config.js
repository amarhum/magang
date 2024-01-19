/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "abu" : '#F7F6E7',
        "ijo-tua" : '#0F2615',
        "ijo-muda" : '#004214',
        "ijo2" : "#465928",
        "crem" : "#D9D389",
        "ijo_c" : "#848C42",
        "gray" : "#B3B3B3",
        "putih" : "#F7F8FA",
        "abu2" : "#D9D9D9",
      },
      fontFamily: {
        fair: " 'Playfair Display','serif' ",
        lato: 'Lato'
      },
      backgroundImage : {
          'bunga' :  "url( 'D:/belajar koding/react_2/src/aset/aset_blog/bunga.png' ) ",
      }
    },
  },
  plugins: [],
}

