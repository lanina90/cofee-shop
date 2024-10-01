import React from 'react';
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-wrapper']}>
        <img src="/logo.png" alt="logo" width={250} height={250}/>
        <div>
          тут можна розмістити телефон і соціалки
        </div>
      </div>
    </footer>
  );
};

export default Footer;