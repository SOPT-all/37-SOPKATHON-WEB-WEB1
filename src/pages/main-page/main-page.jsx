import sampleImage from "../../assets/images/eya.jpeg";
import sampleImage2 from "../../assets/images/sample2.jpeg";
import sampleImage3 from "../../assets/images/sample3.jpg";
import { MainGrid } from "../../components/main-grid/main-grid";
import * as styles from "./main-page.css";
import LOGO from "../../assets/icons/logo.svg";
import Character6 from "../../assets/images/img_character6.png";
import Character5 from "../../assets/images/img_character5.png";
import TEXT from "../../assets/images/home_text.png";
import { get } from "../../apis/http";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const MainPage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await get(`/api/v1/videos/feed`);
      const newData = response || [];
      setVideos(newData.data.items);
      console.log(newData.data.items);
    } catch (error) {
      console.error("피드 불러오기 실패", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={LOGO} alt="로고" />
      </header>
      {!loading && (
        <>
          <img className={styles.text} src={TEXT} />
          <img className={styles.yellow} src={Character5} />
          <img className={styles.red} src={Character6} />
          <MainGrid videos={videos || []} />;
        </>
      )}
    </div>
  );
};

export default MainPage;
