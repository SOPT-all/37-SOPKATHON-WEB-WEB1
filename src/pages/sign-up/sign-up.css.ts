import { style } from "@vanilla-extract/css";
import { color } from "./../../styles/token/color";
import { typography } from "./../../styles/token/typography";
import splashbg from "./../../assets/images/splashbg.png";

export const container = style({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(${splashbg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

export const header = style({
  display: "flex",
  justifyContent: "center",
  padding: "1.55rem",
  backgroundColor: "transparent",
});

export const title = style({
  backgroundColor: "transparent",
  ...typography.sub_title1,
});

export const form = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",

  padding: "2rem",
});

export const iconBox = style({
  position: "absolute",
  top: "-43.5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "23rem",
  zIndex: 2,
});

export const inputBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.4rem",
  marginBottom: "2.4rem",
});

export const error = style({
  marginTop: "-0.8rem",
  marginLeft: "1rem",
  color: color.brand["red"],
  ...typography.caption2,
});
