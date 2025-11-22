import { style } from "@vanilla-extract/css";
import { color } from "./../../styles/token/color";
import { typography } from "./../../styles/token/typography";

export const container = style({
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  display: "block",
  cursor: "pointer",
  width: "16.3rem",
  height: "29rem",
  padding: "0",

  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 31.73%, rgba(0, 0, 0, 0.60) 84.62%)",
    zIndex: 1,
    pointerEvents: "none",
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
});

const overlayBase = style({
  position: "absolute",
  lineHeight: 1.3,
  zIndex: 2,
});

export const nicknameWrapper = style([
  overlayBase,
  {
    display: "flex",
    alignItems: "center",
    height: "2.4rem",
    gap: "0.4rem",
    top: "1.1rem",
    left: "1.2rem",
    padding: "0.1rem 0.8rem",
    borderRadius: "100px",
    backgroundColor: "#D27003",
    color: color.white,
  },
]);

export const badge = style({
  height: "2.4rem",
});

export const nickname = style([
  {
    display: "flex",
    alignItems: "center",
    ...typography.caption1,
  },
]);

export const likes = style([
  overlayBase,
  {
    right: "1rem",
    bottom: "1rem",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
    gap: "0.2rem",
  },
]);

export const likeIcon = style({
  width: "1.6rem",
  height: "1.6rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});
