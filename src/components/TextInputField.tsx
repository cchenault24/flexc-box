import { TextField } from "@mui/material";
import { Box } from "@mui/system";

interface TextInputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
}

// Reusable Number Input Component
const TextInputField = ({ label, value, onChange, min }: TextInputFieldProps) => (
  <Box sx={{ flex: "1 1 250px" }}>
    <TextField
      type="number"
      label={label}
      value={value}
      onChange={onChange}
      inputProps={{ min }}
      fullWidth
      sx={{ mb: 2 }}
    />
  </Box>
);

export default TextInputField;
