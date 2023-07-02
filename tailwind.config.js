/** @type {import('tailwindcss').Config} */
export default {
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
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
      },
    },
  },
  plugins: [],
};
