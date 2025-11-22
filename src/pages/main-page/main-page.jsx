import sampleImage from "../../assets/images/eya.jpeg";
import sampleImage2 from "../../assets/images/sample2.jpeg";
import sampleImage3 from "../../assets/images/sample3.jpg";
import { MainGrid } from "../../components/main-grid/main-grid";
import * as styles from "./main-page.css";
import LOGO from "../../assets/icons/logo.svg";
import Character6 from "../../assets/images/img_character6.png";
import Character5 from "../../assets/images/img_character5.png";
import TEXT from "../../assets/images/home_text.png";

const MOCK_VIDEOS = [
  {
    videoId: 1,
    nickname: "사용자1",
    likeCount: 10,
    imageUrl: sampleImage,
  },
  {
    videoId: 2,
    nickname: "사용자2",
    likeCount: 20,
    imageUrl: sampleImage2,
  },
  {
    videoId: 3,
    nickname: "사용자3",
    likeCount: 30,
    imageUrl: sampleImage3,
  },
  {
    videoId: 4,
    nickname: "사용자4",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 5,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    videoId: 6,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    videoId: 7,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
  {
    videoId: 8,
    nickname: "사용자5",
    likeCount: 40,
    imageUrl: sampleImage2,
  },
  {
    videoId: 9,
    nickname: "사용자6",
    likeCount: 40,
    imageUrl: sampleImage3,
  },
  {
    videoId: 10,
    nickname: "사용자7",
    likeCount: 40,
    imageUrl: sampleImage,
  },
];

const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={LOGO} alt="로고" />
      </header>
      <img className={styles.text} src={TEXT} />
      <img className={styles.yellow} src={Character5} />
      <img className={styles.red} src={Character6} />
      <MainGrid videos={MOCK_VIDEOS} />;
    </div>
  );
};

export default MainPage;
