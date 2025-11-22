import * as styles from "./input.css";

export const Input = ({ ...props }) => {
  return <input className={styles.base} {...props} />;
};
