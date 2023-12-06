import styles from "./Button.module.css";

/* eslint-disable react/prop-types */

function Button({ children, onClick, test }) {
  return (
    <button className={`${styles.btn} ${styles[test]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
