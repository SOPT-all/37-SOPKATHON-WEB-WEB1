import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/button/button";
import { deleteVideo } from "../../apis/videoApi";
import * as styles from "./ai-score.css";
import backgroundImage from "../../assets/images/ai-score-background.svg";

const AiScore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDeleting, setIsDeleting] = useState(false);

  const videoId = location.state?.videoId;
  const score = location.state?.score || 78;
  const memberId = localStorage.getItem("memberId") || "1";

  const handleDelete = async () => {
    if (!videoId) {
      alert("삭제할 영상 정보가 없습니다.");
      navigate("/");
      return;
    }

    if (!confirm("정말 이 영상을 삭제하시겠습니까?")) {
      return;
    }

    try {
      setIsDeleting(true);
      await deleteVideo(videoId, memberId);
      alert("영상이 삭제되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("삭제 실패:", error);
      alert(
        error.response?.data?.message ||
          "영상 삭제 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsDeleting(false);
    }
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
          {memberId}님의
          <br />
          낙엽 평가가 완료되었어요!
        </h2>

        <p className={styles.scoreText}>{score}점</p>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <Button
            type="gray"
            size="medium"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "삭제 중..." : "삭제하기"}
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
