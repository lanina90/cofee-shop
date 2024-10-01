import React from 'react';
import classNames from "classnames";
import styles from "./styles.module.css";

const Button = ({children, btnStyle = "primary", onClick, className, isActive}) => {
  const btnStyles = classNames( styles.button, {
    [styles[`${btnStyle}`]]: btnStyle,
    [styles["active"]]: isActive
  }, className)

  return (
    <button onClick={onClick} className={btnStyles}>
      {children}
    </button>
  );
};

export default Button;