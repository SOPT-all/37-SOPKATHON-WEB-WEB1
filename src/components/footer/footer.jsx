import { useNavigate } from "react-router-dom";
import * as styles from "./footer.css";
import homeIcon from "../../assets/icons/home.png";
import plusIcon from "../../assets/icons/plus.png";
import mypageIcon from "../../assets/icons/mypage.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footerContainer}>
      <nav className={styles.footerBar}>
        <button
          className={styles.iconButton}
          onClick={() => navigate("/")}
          aria-label="홈"
        >
          <img src={homeIcon} alt="홈" className={styles.icon} />
        </button>

        <button
          className={styles.centerButton}
          onClick={() => navigate("/add-video")}
          aria-label="업로드"
        >
          <img src={plusIcon} alt="업로드" className={styles.centerIcon} />
        </button>

        <button
          className={styles.iconButton}
          onClick={() => navigate("/my-page")}
          aria-label="마이페이지"
        >
          <img src={mypageIcon} alt="마이페이지" className={styles.icon} />
        </button>
      </nav>
    </div>
  );
};

export default Footer;
