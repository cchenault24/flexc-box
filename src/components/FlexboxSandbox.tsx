import React, { useState } from "react";
import { Container, Box, Paper, Typography } from "@mui/material";
import ContextMenu from "./ContextMenu";
import FlexboxInputs from "./FlexboxInputs";
import PresetButtons from "./PresetButtons";
import { COLORS } from "../colors";

interface ContextMenuPosition {
  mouseX: number;
  mouseY: number;
}

const ELEMENT_DEFAULT_SIZE = 100;

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
    Array(Number(numElements))
      .fill(null)
      .map((_, index) => ({
        width: ELEMENT_DEFAULT_SIZE,
        height: ELEMENT_DEFAULT_SIZE,
        backgroundColor: COLORS[index % COLORS.length],
        order: 0,
      }))
  );
  const [contextMenu, setContextMenu] = useState<ContextMenuPosition | null>(
    null
  );

  const elements = Array.from({ length: Number(numElements) }, (_, i) => (
    <Box
      key={i}
      onContextMenu={(e) => handleContextMenu(e, i)}
      sx={{
        width: elementStyles[i]?.width || ELEMENT_DEFAULT_SIZE,
        height: elementStyles[i]?.height || ELEMENT_DEFAULT_SIZE,
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

  const applyPreset = (config: {
    display: string;
    flexDirection: string;
    flexWrap: string;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
  }) => {
    setDisplay(config.display);
    setFlexDirection(config.flexDirection);
    setFlexWrap(config.flexWrap);
    setJustifyContent(config.justifyContent);
    setAlignItems(config.alignItems);
    setAlignContent(config.alignContent);
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
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: 4,
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        Flexbox Sandbox
      </Typography>
      <PresetButtons onPresetSelect={applyPreset} />
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
          minWidth: "700px",
          maxWidth: "100%",
          height: "60vh",
          minHeight: "700px",
          maxHeight: "100%",
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
