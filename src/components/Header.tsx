import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";

const Header = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: "primary.main",
      boxShadow: 2,
      py: 2,
    }}
  >
    <Toolbar sx={{ justifyContent: "center", alignItems: "center" }}>
      <Box
        component="img"
        src="/src/assets/main-logo.png"
        alt="Flexc.Box Logo"
        sx={{
          height: 80,
          filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))",
        }}
      />
    </Toolbar>
  </AppBar>
);

export default Header;