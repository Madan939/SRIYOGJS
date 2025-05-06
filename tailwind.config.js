/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // consulting breakpoints

      lgMax: { max: "992px" },
      // => @media (max-width: 992px) { ... }
      mdMax: { max: "768px" },
      // => @media (max-width: 767px) { ... }
      smMax: { max: "568px" },
      // => @media (max-width: 568px) { ... }
      xlMax: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      //Internship && blog breakpoints
      sm: "640px", // @media (min-width: 640px)
      md: "768px", // @media (min-width: 768px)
      lg: "1024px", // @media (min-width: 1024px)
      xl: "1280px", // @media (min-width: 1280px)

      // Main  breakpoints
      "max-sm": { max: "639px" }, // Up to 639px (phones)
      "max-md": { max: "767px" }, // Up to 767px (small tablets)
      "max-lg": { max: "1023px" }, // Up to 1023px (tablets)
      "max-xl": { max: "1279px" }, // Up to 1279px (laptops)
    },
    extend: {
      container: {
        center: true, // Center the container
        padding: {
          DEFAULT: "0.5rem", // 1rem padding on all devices by default
          lg: "1.5rem", // 2rem padding from lg (≥1024px) and larger
        },
        screens: {
          sm: "100%", // Full width on small screens
          md: "720px", // Medium screens
          lg: "960px", // Large screens
          xl: "1200px", // Extra-large screens
          "2xl": "1400px", // 2XL screens
        },
      },
      footerInfo: {
        ul: {
          width: "33.33%",
        },
      },
      backgroundImage: {
        mayorImage: "url('/consulting/assets/mayor.jpg')",
        banner: "url('/consulting/assets/banner/banner.jpg')",
      },
      colors: {
        "custom-gray": "#efefef",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
