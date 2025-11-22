import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as styles from "./detail.css";
import leftIcon from "./../../assets/icons/leftIcon.png";
// import likeOn from "../../assets/icons/like-on.png";
// import likeOff from "../../assets/icons/like-off.png";
// 실제 API 경로에 맞게 수정해서 사용하시면 됩니다.
// const getVideo = async (videoId) => {
//   const res = await fetch(`/api/v1/videos?videoId=${videoId}`);
//   if (!res.ok) {
//     throw new Error("영상 조회에 실패했습니다.");
//   }
//   const json = await res.json();
//   // 응답 형식: { data: { memberId, nickname, videoUrl, thumbnailUrl, likeCount, content, score } }
//   return json.data;
// };

export const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   const videoId = .get("videoId");

  const [videoData, setVideoData] = useState({
    memberId: 42,
    nickname: "테스트유저",
    videoUrl: "https://example.com/videos/test_video.mp4",
    thumbnailUrl: "https://example.com/videos/test_thumbnail.jpg",
    likeCount: 87,
    content: "이 영상은 연습 기록용으로 업로드된 테스트 데이터입니다.",
    score: 92,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     if (!videoId) {
  //       setError("videoId가 존재하지 않습니다.");
  //       setLoading(false);
  //       return;
  //     }

  //     const fetchVideo = async () => {
  //       try {
  //         setLoading(true);
  //         const data = await getVideo(videoId);
  //         setVideoData(data);
  //       } catch (err) {
  //         setError(err.message || "영상 정보를 불러오지 못했습니다.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchVideo();
  //   }, [videoId]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleBack}
        >
          ←
        </button>
        <p className={styles.statusText}>로딩 중입니다...</p>
      </div>
    );
  }

  if (error || !videoData) {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleBack}
        >
          <img alt="이전" src={leftIcon} />
        </button>
        <p className={styles.statusText}>
          {error || "영상 정보를 찾을 수 없습니다."}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* 좌측 상단 이전 버튼 */}
      <button type="button" className={styles.backButton} onClick={handleBack}>
        <img alt="이전" src={leftIcon} />
      </button>

      {/* 상단 중앙 점수 표시 */}
      <p className={styles.score}>{videoData.score}점</p>

      {/* 이미지 (videoUrl 사용) */}
      <video className={styles.video} src={videoData.videoUrl} controls />

      {/* 닉네임 */}
      <div className={styles.nickname}>{videoData.nickname}</div>

      {/* 내용 */}
      <div className={styles.content}>{videoData.content}</div>

      <div>
        <p className={styles.likeText}>{videoData.likeCount}</p>
      </div>
    </div>
  );
};
