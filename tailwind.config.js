/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4079584",
        bodyLight: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        "hero-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "hero-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "light-icon": "url('/src/assets/images/icon-moon.svg')",
        "dark-icon": "url('/src/assets/images/icon-sun.svg')",
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
