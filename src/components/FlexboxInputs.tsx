import React from "react";
import { Box, SelectChangeEvent } from "@mui/material";
import DropdownField from "./DropdownField";
import NumberInputField from "./NumberInputField";

interface FlexboxInputsProps {
  display: string;
  setDisplay: (value: string) => void;
  flexDirection: string;
  setFlexDirection: (value: string) => void;
  flexWrap: string;
  setFlexWrap: (value: string) => void;
  justifyContent: string;
  setJustifyContent: (value: string) => void;
  alignItems: string;
  setAlignItems: (value: string) => void;
  alignContent: string;
  setAlignContent: (value: string) => void;
  numElements: number;
  setNumElements: (value: number) => void;
}

const FlexboxInputs: React.FC<FlexboxInputsProps> = ({
  display,
  setDisplay,
  flexDirection,
  setFlexDirection,
  flexWrap,
  setFlexWrap,
  justifyContent,
  setJustifyContent,
  alignItems,
  setAlignItems,
  alignContent,
  setAlignContent,
  numElements,
  setNumElements,
}) => {
  return (
    <Box
      mt={{ xs: 2, sm: 4 }}
      width="100%"
      maxWidth={{ xs: "100%", sm: "95%", md: "90%" }}
      mx="auto"
      display="grid"
      gap={{ xs: 1.5, sm: 2 }}
      sx={{
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        paddingX: { xs: 1, sm: 2, md: 3 },
        "& .MuiFormControl-root": {
          minWidth: { xs: "100%", sm: "auto" },
        },
        "& .MuiInputLabel-root": {
          fontSize: { xs: "0.875rem", sm: "1rem" },
        },
        "& .MuiSelect-select": {
          py: { xs: 1, sm: 1.5 },
        },
      }}
    >
      <DropdownField
        label="Display"
        value={display}
        onChange={(e: SelectChangeEvent<string>) => setDisplay(e.target.value)}
        options={["flex", "inline-flex"]}
        tooltip="Defines the display type for the container. Use 'flex' to enable Flexbox."
      />
      <DropdownField
        label="Flex Direction"
        value={flexDirection}
        onChange={(e: SelectChangeEvent<string>) =>
          setFlexDirection(e.target.value)
        }
        options={["row", "row-reverse", "column", "column-reverse"]}
        tooltip="Specifies the direction of the main axis (e.g., row, column)."
      />
      <DropdownField
        label="Flex Wrap"
        value={flexWrap}
        onChange={(e: SelectChangeEvent<string>) => setFlexWrap(e.target.value)}
        options={["nowrap", "wrap", "wrap-reverse"]}
        tooltip="Controls whether items should wrap onto multiple lines."
      />
      <DropdownField
        label="Justify Content"
        value={justifyContent}
        onChange={(e: SelectChangeEvent<string>) =>
          setJustifyContent(e.target.value)
        }
        options={[
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
          "space-evenly",
        ]}
        tooltip="Aligns items along the main axis (e.g., start, center, space-between)."
      />
      <DropdownField
        label="Align Items"
        value={alignItems}
        onChange={(e: SelectChangeEvent<string>) =>
          setAlignItems(e.target.value)
        }
        options={["stretch", "flex-start", "center", "flex-end", "baseline"]}
        tooltip="Aligns items along the cross axis (e.g., stretch, center, flex-start)."
      />
      <DropdownField
        label="Align Content"
        value={alignContent}
        onChange={(e: SelectChangeEvent<string>) =>
          setAlignContent(e.target.value)
        }
        options={[
          "stretch",
          "flex-start",
          "center",
          "flex-end",
          "space-between",
          "space-around",
        ]}
        tooltip="Aligns multiple lines along the cross axis when wrapping is enabled."
      />
      <NumberInputField
        label="Number of Items"
        value={numElements}
        onChange={setNumElements}
        tooltip="Specifies the number of child elements in the flex container."
      />
    </Box>
  );
};

export default FlexboxInputs;
