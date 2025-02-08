import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Tooltip,
  IconButton,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface DropdownFieldProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  tooltip?: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  value,
  onChange,
  options,
  tooltip,
}) => {
  const FieldLabelContent = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: { xs: 0.5, sm: 1 },
      }}
    >
      <Box
        component="span"
        sx={{
          fontSize: { xs: "0.8rem", sm: "1rem" },
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Box>
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
  );

  return (
    <Box sx={{ flex: "1 1" }}>
      <FormControl fullWidth>
        <InputLabel
          shrink
          sx={{
            transform: {
              xs: "translate(14px, -6px) scale(0.75)",
              sm: "translate(14px, -9px) scale(0.75)",
            },
          }}
        >
          {FieldLabelContent}
        </InputLabel>
        <Select
          value={value}
          onChange={onChange}
          label={FieldLabelContent}
          sx={{
            "& .MuiSelect-select": {
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                minHeight: { xs: "32px", sm: "36px" },
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownField;
