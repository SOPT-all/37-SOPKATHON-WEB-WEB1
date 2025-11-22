import { useState } from "react";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import Tab from "./components/tab/tab";
import backgroundImage from "../../assets/icons/home-background.png";
import * as styles from "./my-page.css";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index, value) => {
    setActiveTab(index);
    console.log("Tab changed:", index, value);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Profile />
        <Tab defaultTab={activeTab} onChange={handleTabChange} />
      </div>
    </div>
  );
};

export default MyPage;
