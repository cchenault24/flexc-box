import React from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface NumberInputFieldProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  tooltip?: string;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  label,
  value,
  onChange,
  tooltip,
}) => {
  const handleDecrement = () => {
    onChange(value - 1);
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ flex: "1 1" }}>
      <TextField
        type="number"
        label={
          <>
            {label}
            {tooltip && (
              <Tooltip title={tooltip} arrow>
                <IconButton size="small">
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </>
        }
        value={value}
        onChange={handleChange}
        inputProps={{
          style: { textAlign: "center" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleDecrement}>-</IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleIncrement}>+</IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default NumberInputField;
