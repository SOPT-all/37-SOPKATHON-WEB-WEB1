import { useState } from "react";
import * as styles from "./tab.css";

const Tab = ({ defaultTab = 0, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    { label: "내 게시물", value: "posts" },
    { label: "좋아요", value: "likes" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index, tabs[index].value);
    }
  };

  return (
    <div className={styles.container}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tabButton} ${
            activeTab === index ? styles.tabButtonActive : ""
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;

