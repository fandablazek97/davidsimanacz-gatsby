module.exports = {
  presets: [
    require("./src/styles/core/tw-reveal-animations"),
    require("./src/styles/core/tw-reveal-utils"),
    require("./src/styles/core/tw-reveal-colors"),
    require("./src/styles/core/tw-reveal-base"), // Musí být jako poslední
  ],

  darkMode: "class", // "class" / "media" / false

  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Containers/**/*.{js,jsx,ts,tsx}",
    "./src/Layouts/**/*.{js,jsx,ts,tsx}",
    "./src/Libraries/**/*.{js,jsx,ts,tsx}",
    "./src/Global/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
};
