import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import { typography } from "../../styles/token/typography";

export const base = style({
  width: "100%",
  padding: "1.2rem",
  border: `1px solid ${color.gray[400]}`,
  borderRadius: "0.8rem",
  backgroundColor: color.white,
  ...typography.body2,
});
