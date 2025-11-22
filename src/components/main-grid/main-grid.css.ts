// main-grid.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gridAutoRows: "150px", // 한 "행" 높이 (카드 높이보다 작게 잡으면 겹쳐 보임)
  columnGap: "0",
  rowGap: "0",
  position: "relative",
});

export const item = style({
  position: "relative",
  gridRowEnd: "span 2", 
  height: "200px", // TODO: 카드 높이 변경 예정
});

// 왼쪽 컬럼
export const itemLeft = style({
  gridColumn: "1 / 2",
});

// 오른쪽 컬럼
export const itemRight = style({
  gridColumn: "2 / 3",
});
