import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  overflow: "hidden",
});

export const backgroundImg = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// Splash 초기 로고 위치 (정중앙)
export const logoImg = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "26.6rem",
  zIndex: 2,
  transition: "all 0.7s ease-in-out",
});

// SignUp 로고 위치와 정확히 일치하도록 하는 exit 이동
export const logoExit = style({
  top: "27%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.865)",
});
