import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddVideoHeader from "../../components/add-video-header/add-video-header";
import { Button } from "../../components/button/button";
import { useUpload } from "../../hooks/useUpload";
import { uploadVideo } from "../../apis/videoApi";
import * as styles from "./add-video.css";
import plusGrayIcon from "../../assets/icons/plus-gray.png";
import backgroundImage from "../../assets/images/background.png";

const AddVideo = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const {
    selectedFile,
    preview,
    fileInputRef,
    handleFileSelect,
    handleFileChange,
    resetUpload,
  } = useUpload();

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    if (!description.trim()) {
      alert("게시글을 작성해주세요.");
      return;
    }

    try {
      setIsUploading(true);

      const memberId = localStorage.getItem("memberId") || "1";

      const response = await uploadVideo(selectedFile, description, memberId);

      console.log("업로드 성공:", response);

      if (response.data) {
        navigate("/ai-score", {
          state: {
            videoId: response.data.videoId,
            score: response.data.score,
          },
        });
      } else {
        alert("영상 업로드에 성공했습니다!");
        resetUpload();
        setDescription("");
      }
    } catch (error) {
      console.error("업로드 실패:", error);
      alert(
        error.response?.data?.message ||
          "영상 업로드 중 오류가 발생했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <AddVideoHeader />
      <div className={styles.container}>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div className={styles.videoSelectArea} onClick={handleFileSelect}>
          {preview ? (
            <video
              src={preview}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
              controls
            />
          ) : (
            <>
              <img src={plusGrayIcon} alt="추가" className={styles.plusIcon} />
              <span className={styles.selectText}>영상 선택하기</span>
            </>
          )}
        </div>

        <textarea
          className={styles.textArea}
          placeholder="게시글 작성 (최대 50자)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={50}
        />

        <div className={styles.buttonWrapper}>
          <Button
            type="primary"
            size="medium"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? "업로드 중..." : "업로드하기"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
