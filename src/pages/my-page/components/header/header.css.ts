import { style } from "@vanilla-extract/css";
import { typography } from "../../../../styles/token/typography";

export const header = style({
  position: "relative",
  width: "100%",
  height: "5.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "1.55rem",
  paddingBottom: "0.85rem",
  backgroundColor: "#fff5d9",
});


export const title = style({
  ...typography.sub_title2,
  color: "#000000",
  textAlign: "center",
  
});

