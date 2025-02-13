module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {fontFamily: {
      times: ['"Times New Roman"', 'serif'],
    },},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darktheme: {
          primary: "#d4af37", // Gold for text and accents
          secondary: "#2a2a2a", // Dark gray background
          accent: "#444", // Slightly lighter gray for accent
          neutral: "#191919", // Deep black background
          "base-100": "#1c1c1c", // Header background
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
