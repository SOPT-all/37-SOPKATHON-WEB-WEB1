import { useTranslation } from "react-i18next";

function tempCompoenent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("greeting")}</h1>
      <section>
        <h2>{t("video.start")}</h2>
      </section>
    </div>
  );
}

export default tempCompoenent;
