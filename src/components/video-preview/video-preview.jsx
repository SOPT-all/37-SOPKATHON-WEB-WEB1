import * as styles from "./video-preview.css";
import tmpGold from "../../assets/images/tmpGold.png";
import { style } from "@vanilla-extract/css";

const RankBadge = ({ idx }) => {
  // TODO: 이미지 src 수정 필요
  switch (idx) {
    case 0:
      return <img src={tmpGold} alt="gold badge" className={styles.badge} />;
    case 1:
      return <img src={tmpGold} alt="silver badge" className={styles.badge} />;
    case 2:
      return <img src={tmpGold} alt="gold badge" className={styles.badge} />;
    default:
      return null;
  }
};

export { RankBadge };
const VideoPreview = ({ nickname, likeCount, imageUrl, idx }) => {
  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => {
        console.log(idx);
      }}
    >
      <img src={imageUrl} alt={nickname} className={styles.image} />
      <div className={styles.nicknameWrapper}>
        <RankBadge idx={idx} />
        <div className={styles.nickname}>{nickname}</div>
      </div>

      <div className={styles.likes}>
        <span className={styles.likeIcon}>♥</span>
        <span>{likeCount}</span>
      </div>
    </button>
  );
};

export { VideoPreview };
