/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hesitez-img": "url('./src/assets/hesitezSection.png')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        Satisfy: ["Satisfy", "sans-serif"],
      },
      colors: {
        blueLogo: "#18DBD4",
        lightColor: "#F7FFFF",
        darkColor: "#0F0F30",
        greenLogo: "#40CB56",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0.9rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default keepTheme(config);
