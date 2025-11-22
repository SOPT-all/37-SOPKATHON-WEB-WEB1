import * as styles from "./button.css";

export const Button = ({
  children,
  type = "default",
  size = "medium",
  ...props
}) => {
  return (
    <button
      className={`${styles.buttonVariants[type]} ${styles.sizeVariants[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
