// video-preview.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  display: "block",
  cursor: "pointer",
  width: "160px",
  height: "250px",
});

export const image = style({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "5px",
});

const overlayBase = style({
  position: "absolute",
  fontSize: "0.875rem",
  lineHeight: 1.3,
});

export const nickname = style([
  overlayBase,
  {
    top: "8px",
    left: "12px",
    fontWeight: 800,
  },
]);

export const likes = style([
  overlayBase,
  {
    right: "12px",
    bottom: "8px",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    gap: "2px",
  },
]);

export const likeIcon = style({
  width: "16px",
  height: "16px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
