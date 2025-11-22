import { useRef } from "react";
import sampleImage from "../../assets/images/eya.jpeg";
import sampleImage2 from "../../assets/images/sample2.jpeg";
import sampleImage3 from "../../assets/images/sample3.jpg";
import { MainGrid } from "../../components/main-grid/main-grid";
import * as styles from "./main-page.css";
import { useState } from "react";
import { useCallback } from "react";
import useIntersectionObserver from "../../hooks/use-intersect-observer";
import { useEffect } from "react";

// 추후 삭제 예정
const MOCK_VIDEOS = [
  {
    videoId: 1,
    nickname: "사용자1",
    likeCount: 10,
    imageUrl: sampleImage,
  },
  {
    videoId: 2,
    nickname: "사용자2",
    likeCount: 20,
    imageUrl: sampleImage2,
  },
  {
    videoId: 3,
    nickname: "사용자3",
    likeCount: 30,
    imageUrl: sampleImage3,
  },
  {
    videoId: 4,
    nickname: "사용자4",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 5,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    videoId: 6,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    videoId: 7,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 8,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    videoId: 9,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    videoId: 10,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 11,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 12,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 13,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 14,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 15,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
];

const MainPage = () => {
  const containerRef = useRef(null); // 목록 부모 컴포넌트
  const pageRef = useRef(0); // 현재 불러와진 페이지 번호 (nextCursor)

  const [videoData, setVideoData] = useState(MOCK_VIDEOS.slice(0, 10)); // 초기 데이터 설정
  const [isLast, setIsLast] = useState(false); // 마지막 데이터인지 여부
  const [loading, setLoading] = useState(false);

  // (임시 delay function)
  const testFetch = (delay = 1000) =>
    new Promise((res) => setTimeout(res, delay));

  // observer function
  const onIntersect = useCallback(
    async ([entry]) => {
      if (entry.isIntersecting && !loading && !isLast) {
        setLoading(true);
        await testFetch(); // 1초 딜레이 (API 호출 딜레이)

        // API 이후, 페이지 번호+데이터 업데이트
        const next = pageRef.current + 1;
        const newData = MOCK_VIDEOS.slice(next * 10, (next + 1) * 10);

        // (조건문 변경 예정) isLast가 true일 때
        if (newData.length < 10) {
          setIsLast(true); // 더 이상 가져올 데이터가 없음
        }

        setVideoData((prev) => [...prev, ...newData]);
        pageRef.current = next;
        setLoading(false);
      }
    },
    [loading, isLast]
  );

  const { setTarget, setRoot } = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.5,
    onIntersect,
  });

  useEffect(() => {
    if (containerRef.current) {
      setRoot(containerRef.current);
    }
  }, [setRoot]);

  return (
    <div className={styles.container} ref={containerRef}>
      <MainGrid videos={videoData} observerRef={!isLast ? setTarget : null} />;
      {loading && (
        // 이거 임시 로딩중 컴포넌트
        <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
          로딩중...
        </div>
      )}
    </div>
  );
};

export default MainPage;
