import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";
import { typography } from "../../styles/token/typography";

export const base = style({
  width: "100%",
  borderRadius: "0.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease-in-out",

  selectors: {
    "&:disabled": {
      opacity: 0.8,
      cursor: "not-allowed",
    },
    "&:hover": {
      opacity: 0.8,
    },
  },
});

export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      backgroundColor: color.brand["red"],
      color: color.white,
    },
  ],
  solid: [
    base,
    {
      border: `1px solid ${color.brand["red"]}`,
      backgroundColor: color.white,
      color: color.brand["red"],
    },
  ],
  default: [
    base,
    {
      backgroundColor: color.gray[700],
      color: color.white,
    },
  ],
});

export const sizeVariants = styleVariants({
  small: {
    padding: "0.5rem",
    ...typography.body3,
  },
  medium: {
    padding: "1rem",
    ...typography.body1,
  },
  large: {
    padding: "1.6rem",
    ...typography.sub_title2,
  },
});
