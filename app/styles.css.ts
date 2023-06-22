import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const breakpoints = {
  xs: "(min-width: 320px)",
  sm: "(min-width: 480px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1440px)",
};

const colors = {
  gray700: "#666666",
  gray600: "#DDDBDA",
  gray500: "#555555",
  gray400: "#999999",
  gray300: "#E0E0E0",
  gray250: "#D5D5D5",
  gray200: "#777777",
  gray100: "#d9d9d9",
  darkgray: "#3f3f3f",
  black: "#333333",
  white: "#FDFDFD",
  bodyBackground: "#ffffff",
  darkBackground: "#e1e0df",
  orange: "#D84B22",
  darkGreen: "#35591f",
};

const space = {
  0: "0rem", // 0px
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.5rem", // 24px
  6: "2rem", // 32px
  7: "2.5rem", // 40px
  8: "3rem", // 48px
  9: "3.5rem", // 56px
  10: "4rem", // 64px
  11: "8rem", // 128px
  12: "16rem", // 256px
  13: "32rem", // 512px
};

// Theme

export const theme = createGlobalTheme(":root", {
  colors,
  fonts: {
    bau: `"ff-bau-web",Helvetica,Roboto,Arial,sans-serif`,
    freight: `"freight-text-pro",Helvetica,Roboto,Arial,sans-serif`,
  },
  space,
  sizes: {
    1: "5px",
    2: "10px",
    3: "15px",
    4: "20px",
    5: "25px",
    6: "35px",
    7: "45px",
    8: "65px",
    9: "80px",
    container: "1400px",
  },
});

globalStyle(".freight", {
  fontFamily: theme.fonts.freight,
});

globalStyle(".bau-regular", {
  fontFamily: theme.fonts.bau,
});

globalStyle("body", {
  background: theme.colors.gray700,
});
