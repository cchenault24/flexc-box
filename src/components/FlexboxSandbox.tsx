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

const ELEMENT_DEFAULT_SIZE = {
  xs: 60,
  sm: 100,
};

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
        width: ELEMENT_DEFAULT_SIZE.sm,
        height: ELEMENT_DEFAULT_SIZE.sm,
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
        width: elementStyles[i]?.width || {
          xs: ELEMENT_DEFAULT_SIZE.xs,
          sm: ELEMENT_DEFAULT_SIZE.sm,
        },
        height: elementStyles[i]?.height || {
          xs: ELEMENT_DEFAULT_SIZE.xs,
          sm: ELEMENT_DEFAULT_SIZE.sm,
        },
        bgcolor: elementStyles[i]?.backgroundColor || "#AC782C",
        order: elementStyles[i]?.order || 0,
        m: { xs: 0.5, sm: 1 },
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
        py: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        px: { xs: 1, sm: 2 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: { xs: 2, sm: 4 },
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        }}
      >
        Flexbox Sandbox
      </Typography>
      <PresetButtons onPresetSelect={applyPreset} />
      <Paper
        sx={{
          p: { xs: 1, sm: 2 },
          display,
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
          alignContent,
          width: "100%",
          minWidth: { xs: "100%", sm: "600px" },
          maxWidth: "100%",
          height: { xs: "40vh", sm: "60vh" },
          minHeight: { xs: "300px", sm: "500px" },
          maxHeight: "100%",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          position: "relative",
          overflow: "auto",
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
