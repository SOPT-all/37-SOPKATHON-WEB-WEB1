// VideoPreview.tsx
import * as styles from "./video-preview.css";

const VideoPreview = ({ nickname, likeCount, imageUrl }) => {
  return (
    <button type="button" className={styles.container}>
      <img src={imageUrl} alt={nickname} className={styles.image} />

      <div className={styles.nickname}>{nickname}</div>

      <div className={styles.likes}>
        <span className={styles.likeIcon}>♥</span>
        <span>{likeCount}</span>
      </div>
    </button>
  );
};

export { VideoPreview };
