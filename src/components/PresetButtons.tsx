import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface PresetLayout {
  label: string;
  config: {
    display: string;
    flexDirection: string;
    flexWrap: string;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
  };
}

const presets: PresetLayout[] = [
  {
    label: "Centered Content",
    config: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
  },
  {
    label: "Column Reverse",
    config: {
      display: "flex",
      flexDirection: "column-reverse",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
  },
  {
    label: "Flex End Row",
    config: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      alignContent: "stretch",
    },
  },
  {
    label: "Gallery",
    config: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "stretch",
      alignContent: "stretch",
    },
  },
  {
    label: "Space Between",
    config: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "stretch",
    },
  },
  {
    label: "Space Evenly",
    config: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "stretch",
      alignContent: "stretch",
    },
  },
];

interface PresetButtonsProps {
  onPresetSelect: (config: PresetLayout["config"]) => void;
}

const PresetButtons: React.FC<PresetButtonsProps> = ({ onPresetSelect }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        mb: { xs: 1.5, sm: 2 },
        display: "flex",
        gap: { xs: 1, sm: 2 },
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        px: { xs: 1, sm: 2 },
      }}
    >
      {isMobile ? (
        <>
          <Button
            variant="contained"
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: "#AC782C",
              color: "white",
              borderRadius: { xs: "16px", sm: "20px" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              fontWeight: "bold",
              minWidth: { xs: "120px", sm: "auto" },
              "&:hover": {
                backgroundColor: "#F28C05",
              },
            }}
            endIcon={anchorEl ? <ExpandLess /> : <ExpandMore />}
          >
            Presets
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                maxHeight: "70vh",
                width: { xs: "200px", sm: "250px" },
              },
            }}
          >
            {presets.map((preset) => (
              <MenuItem
                key={preset.label}
                onClick={() => {
                  onPresetSelect(preset.config);
                  handleMenuClose();
                }}
              >
                {preset.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        presets.map((preset) => (
          <Button
            key={preset.label}
            variant="contained"
            sx={{
              backgroundColor: "#AC782C",
              color: "white",
              borderRadius: "20px",
              padding: "8px 16px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#F28C05",
              },
            }}
            onClick={() => onPresetSelect(preset.config)}
          >
            {preset.label}
          </Button>
        ))
      )}
    </Box>
  );
};

export default PresetButtons;
