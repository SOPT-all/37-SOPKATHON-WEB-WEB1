import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  display: "block",
  cursor: "pointer",
  width: "16.3rem",
  height: "29rem",
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
  lineHeight: 1.3,
});

export const nicknameWrapper = style([
  overlayBase,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    top: "0.8rem",
    left: "1.2rem",
  },
]);

export const badge = style({
  width: "2rem", // TODO: 이미지 크기
});

export const nickname = style([
  {
    fontWeight: 800,
  },
]);

export const likes = style([
  overlayBase,
  {
    right: "1.2rem",
    bottom: "0.8rem",
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
