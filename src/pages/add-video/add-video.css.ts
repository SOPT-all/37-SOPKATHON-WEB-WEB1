import { style } from "@vanilla-extract/css";
import { color } from "../../styles/token/color";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  gap: "2rem",
  height: "calc(100vh - 6rem)",
});

export const videoSelectArea = style({
  width: "21.7rem",
  height: "37.8rem",
  margin: "0 auto",
  backgroundColor: "#E8E8E8",
  borderRadius: "18px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.8rem",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: "#DADADA",
  },
});

export const plusIcon = style({
  width: "1.4rem",
  height: "1.4rem",
});

export const selectText = style({
  fontSize: "1.6rem",
  fontWeight: 400,
  color: "#8E8E93",
});

export const textArea = style({
  width: "100%",
  minHeight: "20rem",
  padding: "2rem",
  backgroundColor: "#F5F5F5",
  border: "1px solid #E0E0E0",
  borderRadius: "1.2rem",
  fontSize: "1.4rem",
  fontWeight: 400,
  color: color.black,
  resize: "none",
  outline: "none",
  "::placeholder": {
    color: "#8E8E93",
  },
  ":focus": {
    borderColor: "#C0C0C0",
  },
});

export const buttonWrapper = style({
  width: "100%",
  marginTop: "auto",
  paddingBottom: "2rem",
});
