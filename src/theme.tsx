import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#011632",
      main: "#25b4f8",
      light: "#E6F6FE",
    },
    secondary: {
      main: "#2D3748",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#ED8936",
    },
    error: {
      main: "#EF4444",
    },
    text: {
      primary: "#3C4959",
    },
  },

  typography: {
    fontFamily: "'General Sans', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "3.875rem", // 62px
      lineHeight: "120%",
      fontWeight: 600,
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: "2.5rem",
      lineHeight: "125%",
      fontWeight: 600,
    },
    h3: {
      fontSize: "2.25rem",
      lineHeight: "125%",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      lineHeight: "120%",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.5rem",
      lineHeight: "155%",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.125rem",
      lineHeight: "155%",
      fontWeight: 400,
    },
  },

  shadows: [
    "none",
    "0 2px 4px rgba(0, 0, 0, 0.05)",
    "0 4px 6px rgba(0, 0, 0, 0.1)",
    "0 10px 15px rgba(0, 0, 0, 0.1)",
    "0 20px 25px rgba(0, 0, 0, 0.1)",
    "0 25px 30px rgba(0, 0, 0, 0.1)",
    "0 30px 35px rgba(0, 0, 0, 0.1)",
    "0 35px 40px rgba(0, 0, 0, 0.1)",
    "0 40px 45px rgba(0, 0, 0, 0.1)",
    "0 45px 50px rgba(0, 0, 0, 0.1)",
    "0 50px 55px rgba(0, 0, 0, 0.1)",
    "0 55px 60px rgba(0, 0, 0, 0.1)",
    "0 60px 65px rgba(0, 0, 0, 0.1)",
    "0 65px 70px rgba(0, 0, 0, 0.1)",
    "0 70px 75px rgba(0, 0, 0, 0.1)",
    "0 75px 80px rgba(0, 0, 0, 0.1)",
    "0 80px 85px rgba(0, 0, 0, 0.1)",
    "0 85px 90px rgba(0, 0, 0, 0.1)",
    "0 90px 95px rgba(0, 0, 0, 0.1)",
    "0 95px 100px rgba(0, 0, 0, 0.1)",
    "0 100px 105px rgba(0, 0, 0, 0.1)",
    "0 105px 110px rgba(0, 0, 0, 0.1)",
    "0 110px 115px rgba(0, 0, 0, 0.1)",
    "0 115px 120px rgba(0, 0, 0, 0.1)",
    "0 120px 125px rgba(0, 0, 0, 0.1)",
  ],

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1376f8", // Customize the button color
          "&:hover": {
            backgroundColor: "#115fb3", // Darken on hover
          },
        },
      },
    },
  },
});

export default theme;
