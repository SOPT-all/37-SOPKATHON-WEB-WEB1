import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import backgroundImage from "../../assets/images/background.png";

export const pageContainer = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 2rem",
  position: "relative",
  backgroundImage: `url(${backgroundImage})`,
});

export const header = style({
  fontSize: "1.8rem",
  fontWeight: 600,
  color: color.black,
  padding: "1.5rem 0",
});

export const mainContent = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  flex: 1,
});

export const title = style({
  position: "absolute",
  fontSize: "2.3rem",
  fontWeight: 500,
  color: "black",
  fontStyle: "normal",
  textAlign: "center",
  lineHeight: "140%",
});

export const scoreBoardWrapper = style({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const scoreBoardImage = style({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

export const scoreText = style({
  position: "absolute",
  top: "58%",
  left: "50%",

  transform: "translate(-50%, -50%)",

  fontSize: "4rem",
  fontWeight: 700,
  color: color.brand["red"],
  textAlign: "center",
  whiteSpace: "nowrap",
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
