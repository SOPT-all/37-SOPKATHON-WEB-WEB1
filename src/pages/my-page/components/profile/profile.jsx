import * as styles from "./profile.css";
import { color } from "../../../../styles/token/color";
import mypageIcon from "../../../../assets/icons/mypage.png";
import editIcon from "../../../../assets/icons/icon_edit.png";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileIcon}>
        <img src={mypageIcon} alt="프로필" className={styles.profileImage} />
      </div>
      <div className={styles.nicknameContainer}>
        <span className={styles.nickname}>낙엽의 지배자</span>
        <img src={editIcon} alt="수정" className={styles.pencilIcon} />
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>게시물</span>
          <span className={styles.statValue}>0개</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statLabel}>좋아요</span>
          <span className={styles.statValue}>30</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

