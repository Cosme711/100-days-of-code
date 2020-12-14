module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: "#1E213A",
      darkblue: "#100E1D",
      white: "#E7E7EB",
      grey: "#A09FB1",
      darkgrey: "#88869D",
      purple: "#3C47E9"
    },
    extend: {
      animation: {
        openModal: "openModal 1s forwards",
        closeModal: 'closeModal 1s forwards'
      },
      keyframes: {
        'openModal': {
          "0%" : { transform: "translateX(-100rem)" },
          "100%" : { transform: "translateX(0)" }
        },
        'closeModal': {
          "0%" : { transform: "translateX(0)" },
          "100%" : { transform: "translateX(-100rem)" }
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
