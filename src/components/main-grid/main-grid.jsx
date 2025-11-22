import { VideoPreview } from "../video-preview/video-preview";
import * as styles from "./main-grid.css";

const MainGrid = ({ videos }) => {
  return (
    <div className={styles.container}>
      {videos.map((video, index) => {
        const isRight = index % 2 === 0; // 0,2,4,... → 오른쪽 / 1,3,5,... → 왼쪽

        const classNames = [
          styles.item,
          isRight ? styles.itemRight : styles.itemLeft,
          index > 0 ? styles.itemOverlap : "", // 첫 번째만 겹치지 않게
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={video.videoId} className={classNames}>
            <VideoPreview
              idx={index}
              nickname={video.nickname}
              likeCount={video.likeCount}
              imageUrl={video.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export { MainGrid };
