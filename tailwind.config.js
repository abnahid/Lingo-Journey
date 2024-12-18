/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your JS/JSX files
  ],
  theme: {
    extend: {
      colors: {
        "lingo-blue": "#4A90E2", // Custom blue color for buttons
        "lingo-orange": "#FF6F61", // Custom orange for highlights
        "lingo-green": "#8BC34A", // Custom green for success states
        "lingo-dark": "#333333", // Custom dark color for text
      },
      // fontFamily: {
      //   "custom-font": ["Poppins", "sans-serif"],
      // },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5C54AB",
          secondary: "#11142D",
          accent: "#FF7A00",
          neutral: "#333333",
          "base-100": "#FFFFFF",
          "base-200": "#F7F8FC",
          "base-300": "#E5E7EB",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        mydarktheme: {
          primary: "#5C54AB",
          secondary: "#1F2937",
          accent: "#FFAF66",
          neutral: "#1E1E2F",
          "base-100": "#111827",
          "base-200": "#1F2937",
          "base-300": "#374151",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "mydarktheme", // Set the default dark theme
  },
  darkMode: "class", // Enable class-based dark mode
};
