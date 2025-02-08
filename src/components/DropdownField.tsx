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
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box component="span" sx={{ marginRight: 1 }}>
        {label}
      </Box>
      {tooltip && (
        <Tooltip title={tooltip} arrow>
          <IconButton size="small" sx={{ padding: 0 }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
  return (
    <Box sx={{ flex: "1 1" }}>
      <FormControl fullWidth>
        <InputLabel shrink>{FieldLabelContent}</InputLabel>
        <Select value={value} onChange={onChange} label={FieldLabelContent}>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownField;
