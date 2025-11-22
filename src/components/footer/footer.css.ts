import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";

export const footerContainer = style({
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "fit-content",
  zIndex: 1000,
});

export const footerBar = style({
  width: "231px",
  height: "68px",
  backgroundColor: color.white,
  borderRadius: "100px",
  padding: "0 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
});

export const iconButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "24px",
  height: "24px",
  flexShrink: 0,
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.1)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
});

export const centerButton = style({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: color.brand.red,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  flexShrink: 0,
  transition: "all 0.2s ease",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  ":hover": {
    transform: "scale(1.05)",
  },
  ":active": {
    transform: "scale(0.95)",
  },
});

export const icon = style({
  width: "26px",
  height: "26px",
  display: "block",
});

export const centerIcon = style({
  width: "26px",
  height: "26px",
  display: "block",
  filter: "brightness(0) invert(1)",
});
