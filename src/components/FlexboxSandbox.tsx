import { useState } from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import ContextMenu from "./ContextMenu";
import DropdownField from "./DropdownField";
import NumberInputField from "./NumberInputField";
import FlexboxInputs from "./FlexboxInputs";

interface ContextMenuPosition {
  mouseX: number;
  mouseY: number;
}

const FlexboxSandbox = () => {
  const [display, setDisplay] = useState("flex");
  const [flexDirection, setFlexDirection] = useState("row");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("stretch");
  const [numElements, setNumElements] = useState(3);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [elementStyles, setElementStyles] = useState(
    Array(Number(numElements)).fill({
      width: 50,
      height: 50,
      backgroundColor: "#AC782C",
      order: 0,
    })
  );
  const [contextMenu, setContextMenu] = useState<ContextMenuPosition | null>(
    null
  );

  const elements = Array.from({ length: Number(numElements) }, (_, i) => (
    <Box
      key={i}
      onContextMenu={(e) => handleContextMenu(e, i)}
      sx={{
        width: elementStyles[i]?.width || 50,
        height: elementStyles[i]?.height || 50,
        bgcolor: elementStyles[i]?.backgroundColor || "#AC782C",
        order: elementStyles[i]?.order || 0,
        m: 1,
        borderRadius: "4px",
        cursor: "pointer",
        border: selectedElement === i ? "2px solid #F28C05" : "none",
      }}
    />
  ));

  const handleContextMenu = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.preventDefault();
    setSelectedElement(index);
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleStyleChange = (property: string, value: any) => {
    if (selectedElement === null) return;
    const updatedStyles = [...elementStyles];
    updatedStyles[selectedElement] = {
      ...updatedStyles[selectedElement],
      [property]: value,
    };
    setElementStyles(updatedStyles);
  };

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
          display,
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
          alignContent,
          width: "60vw",
          height: "60vh",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
        }}
      >
        {elements}
      </Paper>
      <FlexboxInputs
        display={display}
        setDisplay={setDisplay}
        flexDirection={flexDirection}
        setFlexDirection={setFlexDirection}
        flexWrap={flexWrap}
        setFlexWrap={setFlexWrap}
        justifyContent={justifyContent}
        setJustifyContent={setJustifyContent}
        alignItems={alignItems}
        setAlignItems={setAlignItems}
        alignContent={alignContent}
        setAlignContent={setAlignContent}
        numElements={numElements}
        setNumElements={setNumElements}
      />
      <ContextMenu
        contextMenu={contextMenu}
        handleClose={handleClose}
        selectedElement={selectedElement ?? 0}
        elementStyles={elementStyles}
        handleStyleChange={handleStyleChange}
      />
    </Container>
  );
};

export default FlexboxSandbox;
