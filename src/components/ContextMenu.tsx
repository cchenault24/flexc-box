import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Box,
  TextField,
  Button,
  InputAdornment,
  Select,
  MenuItem as MuiMenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { TwitterPicker as ColorPicker } from "react-color";

interface ContextMenuProps {
  contextMenu: any;
  handleClose: () => void;
  selectedElement: number;
  elementStyles: any;
  handleStyleChange: (property: string, value: any) => void;
}

const ContextMenu = ({
  contextMenu,
  handleClose,
  selectedElement,
  elementStyles,
  handleStyleChange,
}: ContextMenuProps) => {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [unit, setUnit] = useState<string>("px");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleUnitChange = (e: SelectChangeEvent<string>) => {
    setUnit(e.target.value);
  };

  const applyChange = () => {
    if (activeInput) {
      const fullValue =
        activeInput === "backgroundColor" ? inputValue : `${inputValue}${unit}`;
      handleStyleChange(activeInput, fullValue);
      setActiveInput(null);
      setInputValue("");
      handleClose();
    }
  };

  return (
    <Menu
      open={contextMenu !== null}
      onClose={() => {
        handleClose();
        setActiveInput(null); // Ensure `activeInput` is reset on menu close
      }}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
      sx={{
        "& .MuiMenu-paper": {
          p: 0, // Remove padding from the Menu
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          borderRadius: "8px",
        },
      }}
    >
      <MenuItem
        onClick={() => {
          setActiveInput("width");
          const numericValue =
            elementStyles[selectedElement]?.width.match(/\d+/)?.[0] || "";
          setInputValue(numericValue);
        }}
        selected={activeInput === "width"}
      >
        Change Width
      </MenuItem>
      <MenuItem
        onClick={() => {
          setActiveInput("height");
          const numericValue =
            elementStyles[selectedElement]?.height.match(/\d+/)?.[0] || "";
          setInputValue(numericValue);
        }}
        selected={activeInput === "height"}
      >
        Change Height
      </MenuItem>
      <MenuItem
        onClick={() => {
          setActiveInput("backgroundColor");
          setInputValue(
            elementStyles[selectedElement]?.backgroundColor || "#ffffff"
          );
        }}
        selected={activeInput === "backgroundColor"}
      >
        Change Background Color
      </MenuItem>
      {activeInput && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 1.5,
            borderTop: "1px solid #e0e0e0", // Divider line
            backgroundColor: "#ffffff",
            width: "100%",
          }}
        >
          {activeInput === "backgroundColor" ? (
            <ColorPicker
              color={inputValue}
              onChange={(color: { hex: string }) => setInputValue(color.hex)}
              triangle="hide"
              colors={[
                "#AC782C",
                "#FF6900",
                "#FCB900",
                "#00D084",
                "#8ED1FC",
                "#0693E3",
                "#ABB8C3",
                "#EB144C",
                "#F78DA7",
                "#9900EF",
              ]}
            />
          ) : (
            <TextField
              label={`Edit ${activeInput}`}
              value={inputValue}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: activeInput !== "backgroundColor" && (
                  <InputAdornment position="end">
                    <Select
                      value={unit}
                      onChange={handleUnitChange}
                      variant="standard"
                      sx={{ minWidth: "50px" }}
                    >
                      <MuiMenuItem value="px">px</MuiMenuItem>
                      <MuiMenuItem value="%">%</MuiMenuItem>
                      <MuiMenuItem value="em">em</MuiMenuItem>
                      <MuiMenuItem value="rem">rem</MuiMenuItem>
                    </Select>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "0.9rem",
                },
              }}
            />
          )}
          <Button
            onClick={applyChange}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#F28C05",
              color: "#ffffff",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#d97706",
              },
            }}
          >
            Apply
          </Button>
        </Box>
      )}
    </Menu>
  );
};

export default ContextMenu;
