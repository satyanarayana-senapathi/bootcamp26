import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h7: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  interface Palette {
    icon: Palette["primary"];
    white: Palette["primary"];
    transparent: Palette["primary"];
    greyCharcoal: PaletteOptions["primary"];
    greySlate: PaletteOptions["primary"];
  }

  interface PaletteOptions {
    icon?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    transparent?: PaletteOptions["primary"];
    greyCharcoal?: PaletteOptions["primary"];
    greySlate?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    0?: string;
  }

  interface SimplePaletteColorOptions {
    0?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    caption1: true;
    caption2: true;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      100: "#cfe9fd",
      300: "#70b0f3",
      main: "#1665d8",
      600: "#0b399b",
      700: "#041c67",
    },
    secondary: {
      main: "#e2f1f8",
      300: "#9dbdd5",
      500: "#425b76",
      700: "#213554",
      900: "#0c1938",
    },
    grey: {
      100: "#f5f8fa",
      300: "#dfe3eb",
      500: "#99acc2",
      700: "#516f90",
      900: "#2d3e50",
    },
    success: {
      main: "#34aa44",
    },
    warning: {
      main: "#facf55",
    },
    error: {
      main: "#e6492d",
    },
    icon: {
      main: "#9ea0a5",
    },
    white: {
      main: "#fff",
    },
    transparent: {
      0: "rgba(255, 255, 255, 0.01)",
      50: "rgba(255, 255, 255, 0.5)",
    },
    greyCharcoal: {
      main: "#3e3f42",
    },
    greySlate: {
      main: "#6b6c6f",
    },
  },

  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "36px",
      lineHeight: 1.39,
      fontWeight: "bold",
    },
    h2: {
      fontSize: "36px",
      lineHeight: 1.39,
      fontWeight: "normal",
    },
    h3: {
      fontSize: "26px",
      lineHeight: 1.46,
      fontWeight: 500,
    },
    h4: {
      fontSize: "20px",
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h5: {
      fontSize: "20px",
      lineHeight: 1.5,
      fontWeight: "normal",
    },
    h6: {
      fontSize: "18px",
      lineHeight: 1.56,
      fontWeight: 500,
    },
    h7: {
      fontSize: "18px",
      lineHeight: 1.56,
      fontWeight: "normal",
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: "normal",
    },
    body1: {
      fontSize: "14px",
      lineHeight: 1.57,
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.57,
      fontWeight: "normal",
    },
    caption1: {
      fontSize: "12px",
      lineHeight: 1.5,
      fontWeight: 500,
      fontFamily: "Roboto",
    },
    caption2: {
      fontSize: "12px",
      lineHeight: 1.5,
      fontWeight: "normal",
      fontFamily: "Roboto",
    },
  },
});

export default theme;
