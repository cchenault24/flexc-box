import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AC782C", // Warm brown
    },
    secondary: {
      main: "#F28C05", // Bright orange
    },
    background: {
      default: "#FAFAFA", // Soft white background
      paper: "#FFFFFF", // White for containers
    },
    text: {
      primary: "#5C646C", // Dark grey for text
      secondary: "#ACB4B4", // Light grey for secondary text
    },
  },
  typography: {
    fontFamily: "'Lexend', Arial, sans-serif",
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      color: "#5C646C", // Dark grey for better visibility
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: "none", // Avoid uppercase on buttons
    },
  },
  shape: {
    borderRadius: 12, // Softer rounded corners
  },
});

export default theme;