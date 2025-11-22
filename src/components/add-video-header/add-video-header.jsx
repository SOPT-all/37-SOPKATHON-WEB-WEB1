import { useNavigate } from "react-router-dom";
import * as styles from "./add-video-header.css";
import backIcon from "../../assets/icons/back.png";

const AddVideoHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.backButton}
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
      >
        <img src={backIcon} alt="뒤로가기" className={styles.backIcon} />
      </button>

      <h1 className={styles.title}>낙엽 업로드</h1>
    </header>
  );
};

export default AddVideoHeader;
