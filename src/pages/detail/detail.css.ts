import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import { typography } from "../../styles/token/typography";
import backgroundImg from "../../assets/images/background.png";

export const container = style([
  {
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "2rem 1.6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    backgroundImage: `url(${backgroundImg})`,
  },
]);

export const backButton = style({
  position: "absolute",
  top: "1.6rem",
  left: "1.6rem",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "1.4rem",
  color: "#333333",
});

export const score = style({
  marginTop: "6rem",
  padding: "0.6rem 1.3rem",
  borderRadius: "999px",
  backgroundColor: "#FFDA9C",
  color: color.brand.red,
  textAlign: "center",
  fontSize: "2.3rem",
  fontWeight: "700",
});

export const video = style({
  width: "227px",
  height: "405px",
  borderRadius: "12px",
  objectFit: "cover",
  backgroundColor: "#000000",
  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
});

export const nickname = style([
  {
    marginTop: "1.2rem",
    color: "#222222",
    textAlign: "center",
  },
  typography.body1,
]);

export const content = style({
  width: "50%",
  marginTop: "0.8rem",
  color: "#444444",
  textAlign: "center",
  whiteSpace: "pre-wrap",
  wordBreak: "keep-all",
  ...typography.body4,
});

export const statusText = style({
  marginTop: "4rem",
  fontSize: "1.4rem",
  color: "#777777",
});

export const likeText = style({
  color: "white",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  ...typography.caption2,
});
