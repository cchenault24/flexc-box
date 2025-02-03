import { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
  Paper,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import TextInputField from "./TextInputField";
import DropdownField from "./DropdownField";

const FlexboxSandbox = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [numElements, setNumElements] = useState("3");

  const elements = Array.from({ length: Number(numElements) }, (_, i) => (
    <Box
      key={i}
      sx={{
        width: 50,
        height: 50,
        bgcolor: "primary.main",
        m: 1,
        borderRadius: "4px",
      }}
    />
  ));

  return (
    <Container
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "text.primary", mb: 2 }}
      >
        Flexbox Sandbox
      </Typography>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection,
          justifyContent,
          alignItems,
          width: "80%",
          maxWidth: 800,
          height: "60vh",
          minHeight: 300,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {elements}
      </Paper>
      <Box
        mt={4}
        width="100%"
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
      >
        <DropdownField
          label="Direction"
          value={flexDirection}
          onChange={(e: SelectChangeEvent<string>) =>
            setFlexDirection(e.target.value)
          }
          options={[
            { value: "row", label: "Row" },
            { value: "row-reverse", label: "Row Reverse" },
            { value: "column", label: "Column" },
            { value: "column-reverse", label: "Column Reverse" },
          ]}
        />
        <DropdownField
          label="Justify Content"
          value={justifyContent}
          onChange={(e: SelectChangeEvent<string>) =>
            setJustifyContent(e.target.value)
          }
          options={[
            { value: "flex-start", label: "Flex Start" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "Flex End" },
            { value: "space-between", label: "Space Between" },
            { value: "space-around", label: "Space Around" },
            { value: "space-evenly", label: "Space Evenly" },
          ]}
        />
        <DropdownField
          label="Align Items"
          value={alignItems}
          onChange={(e: SelectChangeEvent<string>) =>
            setAlignItems(e.target.value)
          }
          options={[
            { value: "stretch", label: "Stretch" },
            { value: "flex-start", label: "Flex Start" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "Flex End" },
            { value: "baseline", label: "Baseline" },
          ]}
        />
        <TextInputField
          label="Number of Items"
          value={numElements}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumElements(e.target.value)
          }
          min={1}
        />
      </Box>
    </Container>
  );
};

export default FlexboxSandbox;
