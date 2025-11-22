import { useState } from "react";
import AddVideoHeader from "../../components/add-video-header/add-video-header";
import { Button } from "../../components/button/button";
import { useUpload } from "../../hooks/useUpload";
import * as styles from "./add-video.css";
import plusGrayIcon from "../../assets/icons/plus-gray.png";

const AddVideo = () => {
  const [description, setDescription] = useState("");
  const {
    selectedFile,
    preview,
    fileInputRef,
    handleFileSelect,
    handleFileChange,
    resetUpload,
  } = useUpload();

  const handleUpload = () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    console.log("업로드", {
      file: selectedFile,
      description: description,
    });

    resetUpload();
    setDescription("");
  };

  return (
    <div>
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
          <Button type="primary" size="medium" onClick={handleUpload}>
            업로드하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
