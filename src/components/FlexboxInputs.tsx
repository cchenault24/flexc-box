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
      mt={4}
      width="60vw"
      maxWidth="100%"
      display="flex"
      flexWrap={{ xs: "wrap", xl: "nowrap" }}
      gap={2}
      sx={{
        justifyContent: "flex-start",
        "@media (max-width: 768px)": {
          justifyContent: "center",
        },
      }}
    >
      <DropdownField
        label="Display"
        value={display}
        onChange={(e: SelectChangeEvent<string>) => setDisplay(e.target.value)}
        options={[
          { value: "flex", label: "Flex" },
          { value: "inline-flex", label: "Inline Flex" },
        ]}
      />
      <DropdownField
        label="Flex Direction"
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
        label="Flex Wrap"
        value={flexWrap}
        onChange={(e: SelectChangeEvent<string>) => setFlexWrap(e.target.value)}
        options={[
          { value: "nowrap", label: "No Wrap" },
          { value: "wrap", label: "Wrap" },
          { value: "wrap-reverse", label: "Wrap Reverse" },
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
      <DropdownField
        label="Align Content"
        value={alignContent}
        onChange={(e: SelectChangeEvent<string>) =>
          setAlignContent(e.target.value)
        }
        options={[
          { value: "stretch", label: "Stretch" },
          { value: "flex-start", label: "Flex Start" },
          { value: "center", label: "Center" },
          { value: "flex-end", label: "Flex End" },
          { value: "space-between", label: "Space Between" },
          { value: "space-around", label: "Space Around" },
        ]}
      />
      <NumberInputField
        label="Number of Items"
        value={numElements}
        onChange={(newValue: number) => setNumElements(newValue)}
      />
    </Box>
  );
};

export default FlexboxInputs;
