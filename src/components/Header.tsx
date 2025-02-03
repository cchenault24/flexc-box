import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: "primary.main", // Matches the theme's primary color
      boxShadow: 2, // Adds subtle shadow
      py: 2, // Adds vertical padding
    }}
  >
    <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
      <Box
        component="img"
        src="/src/assets/main-logo.png" // Adjust this path if necessary
        alt="Flexc.Box Logo"
        sx={{
          height: 80,
          filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))", // Subtle shadow for better contrast
        }}
      />
    </Toolbar>
  </AppBar>
);

export default Header;