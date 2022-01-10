module.exports = {
  theme: {
    screens: {
      xs: "368px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)",
    },

    extend: {
      borderRadius: {
        default: "var(--radius)",
      },

      transitionDuration: {
        0: "0ms",
        default: "var(--duration)",
      },
    },
  },

  corePlugins: {
    container: false,
  },

  plugins: [require("@tailwindcss/forms")],
};
