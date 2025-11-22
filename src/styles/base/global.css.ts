import { globalStyle } from "@vanilla-extract/css";

/** HTML & Body style */
globalStyle("html, body", {
  width: "375px",
  maxWidth: "100vw",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "0",
  boxSizing: "border-box",
  scrollBehavior: "smooth",
  fontSize: "62.5%",
  fontFamily: "Pretendard",

  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  border: "1px solid red", // 삭제 예정
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

/** Scrollbar Hide */
globalStyle("::-webkit-scrollbar", {
  display: "none",
});

globalStyle("*", {
  WebkitTapHighlightColor: "transparent",
});
