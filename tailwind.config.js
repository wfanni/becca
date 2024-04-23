/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#131200",
        "red": "#9e0031",
        "green": "#b5d99c",
        "gold": "#de911e",
      },
      backgroundImage: {
        "shining": "linear-gradient(to right, #de911e, #FFC877, #de911e)"
      },
      boxShadow: {
        "smooth": "0px 60px 53px rgba(19, 18, 0, 0.09), 0px 28.7264px 32.6525px rgba(19, 18, 0, 0.0646969), 0px 19.2311px 28.6176px rgba(19, 18, 0, 0.0536497), 0px 13.6419px 24.8757px rgba(19, 18, 0, 0.045), 0px 9.05205px 19.1515px rgba(19, 18, 0, 0.0363503), 0px 4.60936px 10.8924px rgba(19, 18, 0, 0.0253031)"
      }
    },
  },
  plugins: [],
}

