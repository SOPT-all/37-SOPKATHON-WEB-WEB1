// main-grid.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  marginTop: "18.8rem",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gridAutoRows: "150px", // 한 "행" 높이 (카드 높이보다 작게 잡으면 겹쳐 보임)
  columnGap: "1.7rem",
  rowGap: "0",
  position: "relative",
});

export const item = style({
  position: "relative",
  gridRowEnd: "span 2",
  height: "200px",
});

// 왼쪽 컬럼
export const itemLeft = style({
  gridColumn: "1 / 2",
});

// 오른쪽 컬럼
export const itemRight = style({
  gridColumn: "2 / 3",
});
