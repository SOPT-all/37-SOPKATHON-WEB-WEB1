import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const content = style({
  width: "100%",
  flex: 1,
  backgroundColor: "#FFF6DC",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

