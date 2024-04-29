/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "playfair": ['"Playfair Display"', "serif"],
    },
    extend: {
      colors: {
        "black": "#131200",
        "gray": "#3f3f3f",
        "red": "#BC000A",
        "green": "#b5d99c",
        "gold": "#de911e",
        "light-gray": "#ebebeb",
      },
      backgroundImage: {
        "shining": "linear-gradient(to right, #de911e, #FFC877, #de911e)",
        "hero": "url('./src/assets/new-hero4.png')",
        "typing": "url('./src/assets/typing.svg')",
        "gray-gradient": "linear-gradient(to bottom, #ebebeb, #fff 90%)",
        "contact": "url('./src/assets/contact-bg1.png')",
        "sos": "url('/src/assets/sos-bg3.svg')",
        "socials": "url('/src/assets/socials-bg21.png')",
        "massage": "url('/src/assets/massage-bg.png')",
        "marketing": "url('/src/assets/marketing-bg.png')",
        "photography": "url('/src/assets/photography-bg.png')",

      },
      boxShadow: {
        "smooth": "0px 60px 53px rgba(19, 18, 0, 0.09), 0px 28.7264px 32.6525px rgba(19, 18, 0, 0.0646969), 0px 19.2311px 28.6176px rgba(19, 18, 0, 0.0536497), 0px 13.6419px 24.8757px rgba(19, 18, 0, 0.045), 0px 9.05205px 19.1515px rgba(19, 18, 0, 0.0363503), 0px 4.60936px 10.8924px rgba(19, 18, 0, 0.0253031)"
      },
      animation: {
        slide: "slide 1.2s ease-in-out infinite",
        typing: "typing 1s steps(20, end), blink 1s infinite 1s, hide 0.5s ease-in 1 1.5s",
        blink: "slide 1s ease-in-out",
        bounceInLeft: "bounceInLeft 0.8s ease-in-out"
      },
      keyframes: {
        slide: {
          from: {opacity: 0, transform: 'translate3d(0, 0, 0)'},
          '30%': {opacity: 100},
          '80%': {opacity: 100},
          to: {opacity: 0, transform: 'translate3d(150%, 0, 0)'},
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          from: { borderColor: 'transparent' },
          "50%": { borderColor: '#9e0031' },
          to: { borderColor: 'transparent' }
        },
        hide: {
          from: { opacity: 100 },
          to: { opacity: 0 }
        },
        bounceInLeft: {
          from: { opacity: 0, transform: "translate3d(-3000px, 0, 0) scaleX(3)", animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  
          "60%": { opacity: 100, transform: "translate3d(25px, 0, 0) scaleX(1)", animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  
          "75%": { transform: "translate3d(-10px, 0, 0) scaleX(0.98)", animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  
          "90%": { transform: "translate3d(5px, 0, 0) scaleX(0.995)", animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  
          to: { transform: "translate3d(0, 0, 0)", animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
        },
      },
    },
  },
  plugins: [],
}

