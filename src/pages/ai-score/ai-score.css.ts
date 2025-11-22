import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";

export const pageContainer = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  position: "relative",
});

export const header = style({
  fontSize: "1.8rem",
  fontWeight: 600,
  color: color.black,
  marginTop: "2rem",
  marginBottom: "4rem",
});

export const mainContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  flex: 1,
});

export const title = style({
  fontSize: "2.3rem",
  fontWeight: 500,
  color: "black",
  fontStyle: "normal",
  textAlign: "center",
  lineHeight: "140%",
});

export const scoreText = style({
  fontSize: "4rem",
  fontWeight: 700,
  color: "#DC453A",
  textAlign: "center",
  marginTop: "38.5rem",
});

export const buttonContainer = style({
  display: "flex",
  gap: "1.5rem",
  marginTop: "auto",
  marginBottom: "3rem",
  width: "100%",
  maxWidth: "35rem",
});

export const buttonWrapper = style({
  width: "164px",
  height: "58px",
});
