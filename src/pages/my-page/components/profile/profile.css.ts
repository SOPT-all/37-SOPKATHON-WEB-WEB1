import { style } from "@vanilla-extract/css";
import { color } from "../../../../styles/token/color";
import { typography } from "../../../../styles/token/typography";
import { fontWeight } from "../../../../styles/token/font";

export const profileContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "1.12rem",
  paddingBottom: "2rem",
  gap: "1.6rem",
});

export const statsContainer = style({
  width: "calc(100% - 3.2rem)",
  height: "6.5rem",
  display: "flex",
  backgroundColor: color.gray[200],
  borderRadius: "1.2rem",
  marginTop: "2.05rem",
  marginLeft: "1.0rem",
  marginRight: "1.0rem",
  marginBottom: "1.0rem",
  padding: "1.6rem",
  gap: "0",
});

export const statItem = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
});

export const statLabel = style({
  fontFamily: '"Pretendard", sans-serif',
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: fontWeight.semibold,
  lineHeight: "140%",
  color: color.gray[600],
});

export const statValue = style({
  fontFamily: '"Pretendard", sans-serif',
  fontSize: "1.375rem",
  fontStyle: "normal",
  fontWeight: fontWeight.bold,
  lineHeight: "140%",
  color: color.brand.red,
});

export const statDivider = style({
  width: "0.1rem",
  backgroundColor: color.gray[300],
  margin: "0 0.8rem",
});

export const profileIcon = style({
  width: "8rem",
  height: "8rem",
  borderRadius: "50%",
  backgroundColor: color.gray[300],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const profileImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
});

export const nicknameContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
});

export const nickname = style({
  ...typography.body1,
  color: color.black,
});

export const pencilIcon = style({
  width: "2.4rem",
  height: "2.4rem",
  flexShrink: 0,
});

