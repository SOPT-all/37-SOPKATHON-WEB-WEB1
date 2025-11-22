import { useNavigate } from "react-router-dom";
import * as styles from "./header.css";

const Header = ({ label = "마이페이지" }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{label}</h1>
    </header>
  );
};

export default Header;

