module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#414656",
      white: "#A6ABBD",
      blue: "#1E2331"
    },
    fontFamily: {
      'body': ['Padauk', 'sans-serif'],
      'mono': ['Montserrat', 'sans-serif'],
      
    },
    extend: {
      animation :{
        coco: "coco 0.2s ease",
        baba: "baba 0.7s forwards"
      },
      keyframes: {
        'coco': {
          '0%' : { transform: "translateY(3rem)"},
          '100%' : { transform: "translateY(0rem)"}
        },
        'baba': {
          '0%' : { opacity: "1", textDecoration: "none"},
          '100%' : { opacity:"0.5", textDecoration: "line-through"}
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
