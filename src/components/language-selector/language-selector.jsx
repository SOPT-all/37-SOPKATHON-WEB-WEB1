import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("ko")}>한국어</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
};

export default LanguageSelector;
