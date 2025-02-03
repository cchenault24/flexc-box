import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface NumberInputFieldProps {
  value: number;
  onChange: (newValue: number) => void;
  label?: string;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  value,
  onChange,
  label,
}) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleDecrement} edge="start">
              <RemoveIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIncrement} edge="end">
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={() => {}} // Disable direct input editing
      inputProps={{
        style: { textAlign: "center" }, // Center the value
      }}
      sx={{ flex: "1 1 300px" }}
    />
  );
};

export default NumberInputField;
