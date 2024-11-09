import type { Config } from "tailwindcss";
const config: Config = {
  theme: {
    extend: {
      /**
       * Screens
       */
      screens: {
        s: "480px",
        m: "768px",
        l: "1024px",
        xl: "1280px",
      },
      /**
       * Colors
       */
      colors: {
        primary: {
          // DEFAULT: "#CCE4F0",
          DEFAULT: "#0000C5",
          1: "#99C9E2",
          2: "#66ADD3",
          3: "#3392C5",
          4: "#0077B6",
        },
        light: {
          text: {
            DEFAULT: "#333D4B",
            1: "#CED4DA",
            2: "#868E96",
            3: "#191F28",
          },
          bg: {
            DEFAULT: "#FEFEFE",
            1: "#D1D5DB",
            2: "#8181B7",
          },
          border: {
            DEFAULT: "#E5E5E5",
          },
        },
        dark: {
          text: {
            DEFAULT: "#ECECEC",
            3: "#F8F9FE",
            1: "#D9D9D9",
            2: "#ACACAC",
          },
          bg: {
            DEFAULT: "#1E1E1E",
            1: "#2D2D2D",
            2: "#ABABAB",
            3: "#8181B7",
          },
          border: {
            DEFAULT: "#2D2D2D",
          },
        },
      },
      /**
       * Fonts
       */
      fontFamily: {
        sans: ["Noto Sans KR", "Noto Sans", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
