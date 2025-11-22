import { VideoPreview } from "../components/video-preview/video-preview";
import sampleImage from "../assets/images/eya.jpeg";
const MainPage = () => {
  return (
    <div className="relative">
      메인페이지
      <VideoPreview nickname={"용가리"} likeCount={23} imageUrl={sampleImage} />
    </div>
  );
};

export default MainPage;
