import { useState } from "react";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import Tab from "./components/tab/tab";
import { VideoPreview } from "../../components/video-preview/video-preview";
import backgroundImage from "../../assets/icons/home-background.png";
import * as styles from "./my-page.css";
import sampleImage from "../../assets/images/eya.jpeg";
import sampleImage2 from "../../assets/images/sample2.jpeg";
import sampleImage3 from "../../assets/images/sample3.jpg";

const MOCK_POSTS = [
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
];

const MOCK_LIKED_POSTS = [
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
];

const MyPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [posts] = useState(MOCK_POSTS);
  const [likedPosts] = useState(MOCK_LIKED_POSTS);

  const handleTabChange = (index, value) => {
    setActiveTab(index);
    console.log("Tab changed:", index, value);
  };

  const currentPosts = activeTab === 0 ? posts : likedPosts;

  return (
    <div className={styles.container}>
      <Header />
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Profile />
        <Tab defaultTab={activeTab} onChange={handleTabChange} />
        <div className={styles.postsContainer}>
          {currentPosts.map((post) => (
            <div key={post.videoId} className={styles.postItem}>
              <VideoPreview
                idx={-1}
                nickname={post.nickname}
                likeCount={post.likeCount}
                imageUrl={post.imageUrl}
                showRankBadge={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
