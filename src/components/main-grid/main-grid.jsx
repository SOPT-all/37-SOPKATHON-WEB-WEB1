import { VideoPreview } from "../video-preview/video-preview";
import * as styles from "./main-grid.css";
import example1 from "../../assets/images/example1.png";
import example2 from "../../assets/images/example2.png";
import example3 from "../../assets/images/example3.png";

const SAMPLE_IMAGES = [example1, example2, example3];

const MainGrid = ({ videos }) => {
  return (
    <div className={styles.container}>
      {videos?.map((video, index) => {
        const isRight = index % 2 === 0; // 0,2,4,... → 오른쪽 / 1,3,5,... → 왼쪽
        const randomImage = SAMPLE_IMAGES[index % SAMPLE_IMAGES.length];
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
              videoId={video.videoId}
              idx={index}
              videoId={video.videoId}
              nickname={video.nickname}
              likeCount={video.likeCount}
              imageUrl={randomImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export { MainGrid };
