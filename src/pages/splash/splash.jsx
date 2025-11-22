import * as styles from "./splash.css";
import splashImg from "../../assets/images/splashbg.png";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Splash = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);

  useEffect(() => {
    // 먼저 로고가 SignUp 위치로 이동
    const exitTimer = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add(styles.logoExit);
      }
    }, 3000);

    // 이동 후 SignUp으로 전환
    const navTimer = setTimeout(() => {
      navigate("/sign-up");
    }, 3800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className={styles.container}>
      <img className={styles.backgroundImg} src={splashImg} alt="splash" />
      <img ref={logoRef} className={styles.logoImg} src={logo} alt="로고" />
    </div>
  );
};

export { Splash };
