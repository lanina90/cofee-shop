import React from 'react';
import styles from "./styles.module.css"
import classNames from "classnames";

const Link = ({children, btnStyle = "primary", className}) => {

  const btnStyles = classNames( styles.link, {
  [styles[`${btnStyle}`]]: btnStyle
  },
    className
  )

  return (
    <a href={"tel:0979245565"} className={btnStyles}>
      {children}
    </a>
  );
};

export default Link;