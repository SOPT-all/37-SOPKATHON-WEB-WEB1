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

export const postsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1.6rem",
  padding: "1.6rem",
  width: "100%",
  boxSizing: "border-box",
});

export const postItem = style({
  width: "16.3rem",
  height: "29rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

