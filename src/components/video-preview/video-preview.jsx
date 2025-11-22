import * as styles from "./video-preview.css";
import { style } from "@vanilla-extract/css";
import icGood from "../../assets/icons/ic-good.svg";
import icFirst from "../../assets/icons/icon-first.svg";
import icSecond from "../../assets/icons/icon-second.svg";
import icThird from "../../assets/icons/icon-third.svg";

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
const VideoPreview = ({ nickname, likeCount, imageUrl, idx }) => {
  return (
    <button type="button" className={styles.container}>
      <img src={imageUrl} alt={nickname} className={styles.image} />
      <div className={styles.nicknameWrapper}>
        <RankBadge idx={idx} />
        <div className={styles.nickname}>{nickname}</div>
      </div>
      <div className={styles.likes}>
        <img src={icGood} />
        <span>{likeCount}</span>
      </div>
    </button>
  );
};

export { VideoPreview };
