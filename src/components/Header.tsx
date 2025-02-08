import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";

const Header = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: "primary.main",
      boxShadow: 1,
    }}
  >
    <Toolbar
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "56px", sm: "64px" },
        py: { xs: 0.5, sm: 1 },
      }}
    >
      <Box
        component="img"
        src="/src/assets/main-logo.png"
        alt="Flexc.Box Logo"
        sx={{
          height: { xs: 60, sm: 80 },
          maxWidth: "100%",
          objectFit: "contain",
          filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))",
        }}
      />
    </Toolbar>
  </AppBar>
);

export default Header;
