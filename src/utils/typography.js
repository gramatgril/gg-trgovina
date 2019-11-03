import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "600", "700"],
    },
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Montserrat", "serif"],
  blockMarginBottom: "true",
});

export default typography;
