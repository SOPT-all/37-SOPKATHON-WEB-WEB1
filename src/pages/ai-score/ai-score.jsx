import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import * as styles from "./ai-score.css";
import backgroundImage from "../../assets/images/ai-score-background.svg";

const AiScore = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/");
  };

  const handleUpload = () => {
    navigate("/");
  };

  return (
    <div
      className={styles.pageContainer}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={styles.header}>점수 확인</h1>

      <div className={styles.mainContent}>
        <h2 className={styles.title}>
          낙엽의 지배자님의
          <br />
          낙엽 평가가 완료되었어요!
        </h2>

        <p className={styles.scoreText}>78점</p>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <Button type="gray" size="medium" onClick={handleDelete}>
            삭제하기
          </Button>
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="primary" size="medium" onClick={handleUpload}>
            업로드
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiScore;
