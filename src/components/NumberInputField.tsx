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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1 },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            {label}
            {tooltip && (
              <Tooltip title={tooltip} arrow>
                <IconButton
                  size="small"
                  sx={{
                    padding: { xs: "2px", sm: "4px" },
                    "& .MuiSvgIcon-root": {
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    },
                  }}
                >
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        }
        value={value}
        onChange={handleChange}
        inputProps={{
          style: { textAlign: "center" },
          sx: {
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.875rem", sm: "1rem" },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                onClick={handleDecrement}
                sx={{
                  padding: { xs: "4px", sm: "8px" },
                }}
              >
                -
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleIncrement}
                sx={{
                  padding: { xs: "4px", sm: "8px" },
                }}
              >
                +
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiInputLabel-root": {
            fontSize: { xs: "0.875rem", sm: "1rem" },
            transform: {
              xs: "translate(14px, -6px) scale(0.75)",
              sm: "translate(14px, -9px) scale(0.75)",
            },
          },
        }}
      />
    </Box>
  );
};

export default NumberInputField;
