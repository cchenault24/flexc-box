import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Box } from "@mui/system";

interface DropdownFieldProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
}

const DropdownField = ({
  label,
  value,
  onChange,
  options,
}: DropdownFieldProps) => (
  <Box sx={{ flex: "1 1 300px" }}>
    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
      <InputLabel shrink>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default DropdownField;
