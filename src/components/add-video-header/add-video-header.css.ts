import { style } from "@vanilla-extract/css";

export const header = style({
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  backgroundColor: "#fff",
  borderBottom: "1px solid #E0E0E0",
});

export const backButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.2s ease",
  ":hover": {
    opacity: 0.7,
  },
});

export const backIcon = style({
  width: "15px",
  height: "19px",

  display: "block",
});

export const title = style({
  fontSize: "18px",
  fontWeight: 590,
  fontFamily: "SF Pro",
  lineHeight: "22px",
  letterSpacing: "0px",
  color: "#000",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
});
