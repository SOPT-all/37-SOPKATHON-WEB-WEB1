import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import { typography } from "../../styles/token/typography";

export const base = style({
  width: "100%",
  padding: "0.5rem",
  border: `1px solid ${color.gray[500]}`,
  borderRadius: "0.5rem",
  backgroundColor: color.white[700],
  ...typography.body4,
});
