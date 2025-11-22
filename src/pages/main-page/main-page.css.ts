import { style } from "@vanilla-extract/css";
import backgroundImage from "../../assets/images/home-bg.png";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflowY: "auto",

  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "top",
});

export const header = style({
  position: "sticky",
  top: "0",
  width: "100%",
  padding: "1.5rem 2.5rem",
  backgroundColor: "#FFF5D9",
  zIndex: "10",
});

export const text = style({
  position: "absolute",
  top: "7.6rem",
  left: "20.1rem",
});

export const yellow = style({
  position: "absolute",
  top: "16.7rem",
  left: "30.6rem",
});

export const red = style({
  position: "absolute",
  top: "16.9rem",
  left: "-5.2rem",
});
