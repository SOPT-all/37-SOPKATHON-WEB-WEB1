import TempCompoenent from "../components/tempComponent/temp-component";
import LanguageSelector from "../components/language-selector/language-selector";

const MainPage = () => {
  return (
    <div className="relative">
      메인페이지
      <TempCompoenent />
      <LanguageSelector />
    </div>
  );
};

export default MainPage;
