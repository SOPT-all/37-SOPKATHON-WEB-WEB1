import { globalStyle } from "@vanilla-extract/css";

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("button", {
  outline: 0,
  border: 0,
  font: "inherit",
  cursor: "pointer",
  background: "none",
});

globalStyle("input, textarea", {
  border: 0,
  outline: "none",
  background: "none",
  font: "inherit",
});

globalStyle("input:focus, textarea:focus", {
  outline: "none",
});

globalStyle("textarea", {
  resize: "none",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("a:link, a:visited, a:hover, a:active", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  verticalAlign: "top",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});
