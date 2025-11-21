import { globalStyle } from "@vanilla-extract/css";

/** HTML & Body style */
globalStyle("html, body", {
  width: "100%",
  // minHeight: "100vh", (웹앱일 경우 주석 제거)
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  scrollBehavior: "smooth",
  fontSize: "62.5%",

  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
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
