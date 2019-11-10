import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400", "500", "700"],
    },
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Montserrat", "serif"],
  blockMarginBottom: "true",
});

export default typography;
