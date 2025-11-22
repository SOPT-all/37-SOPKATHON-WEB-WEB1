import { useState } from "react";
import * as styles from "./video-preview.css";
import { style } from "@vanilla-extract/css";
import icGood from "../../assets/icons/ic-good.svg";
import icFirst from "../../assets/icons/icon-first.svg";
import icSecond from "../../assets/icons/icon-second.svg";
import icThird from "../../assets/icons/icon-third.svg";
import { useNavigate } from "react-router-dom";
import { toggleLike } from "../../apis/videoApi";

const RankBadge = ({ idx }) => {
  switch (idx) {
    case 0:
      return <img src={icFirst} alt="gold badge" className={styles.badge} />;
    case 1:
      return <img src={icSecond} alt="silver badge" className={styles.badge} />;
    case 2:
      return <img src={icThird} alt="gold badge" className={styles.badge} />;
    default:
      return null;
  }
};

export { RankBadge };
const VideoPreview = ({ nickname, likeCount, imageUrl, idx, videoId }) => {
  const navigate = useNavigate();
const VideoPreview = ({ videoId, nickname, likeCount, imageUrl, idx }) => {
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [isLiking, setIsLiking] = useState(false);

  const handleLikeClick = async (e) => {
    e.stopPropagation();

    if (isLiking) return;

    try {
      setIsLiking(true);
      const memberId = localStorage.getItem("memberId") || "1";

      await toggleLike(videoId, memberId);

      setCurrentLikeCount((prev) => prev + 1);
    } catch (error) {
      console.error("좋아요 실패:", error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => navigate(`/detail/${videoId}`)}
    >
      <img src={imageUrl} alt={nickname} className={styles.image} />
      <div className={styles.nicknameWrapper}>
        <RankBadge idx={idx} />
        <div className={styles.nickname}>{nickname}</div>
      </div>
      <button
        className={styles.likes}
        onClick={handleLikeClick}
        disabled={isLiking}
      >
        <img src={icGood} alt="좋아요" />
        <span>{currentLikeCount}</span>
      </button>
    </button>
  );
};

export { VideoPreview };
