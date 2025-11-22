import * as styles from "./splash.css";
import splashImg from "../../assets/images/splashbg.png";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImg}
        src={splashImg}
        alt="splash 이미지"
      />
      <img className={styles.logoImg} src={logo} alt="로고" />
    </div>
  );
};

export { Splash };
