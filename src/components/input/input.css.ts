import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import { typography } from "../../styles/token/typography";
import { styleVariants } from "@vanilla-extract/css";

export const base = style({
  width: "100%",
  padding: "1.2rem",
  border: `1px solid ${color.gray[400]}`,
  borderRadius: "0.8rem",
  backgroundColor: "transparent",
  color: color.gray[500], // 기본 글씨 색
  ...typography.body2,

  "::placeholder": {
    color: color.gray[500],
  },

  ":focus": {
    color: color.black,
  },
});

export const inputVariants = styleVariants({});
