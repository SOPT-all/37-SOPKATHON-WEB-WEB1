import { style } from "@vanilla-extract/css";
import { color } from "../../../../styles/token/color";
import { typography } from "../../../../styles/token/typography";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "5.3rem",
  padding: "0 2rem",
  borderBottom: `0.2rem solid ${color.gray[400]}`,
  position: "relative",
  boxSizing: "border-box",
});

export const tabButton = style({
  width: "16rem",
  padding: "1.3rem 0",
  border: "none",
  borderBottom: "0.2rem solid transparent",
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontFamily: "Pretendard",
  ...typography.sub_title1,
  color: color.gray[600],
  textAlign: "center",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  marginBottom: "-0.2rem",
});

export const tabButtonActive = style({
  color: color.brand.red,
  borderBottom: `0.2rem solid ${color.brand.red}`,
});

