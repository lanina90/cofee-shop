import React from 'react';
import styles from "./hero.module.css"
import Link from "../Button/Link.jsx";

const Hero = () => {
  return (
    <section className={styles['hero-wrapper']}>
      <div className={styles['hero-content']}>
        <h1 className={styles['hero-content-title']}>Твій настрій на весь день</h1>
        <p className={styles['hero-content-description']}>Відчуй смак та аромат справжньої органічної кави</p>
        <Link>Замовити</Link>
      </div>
    </section>
  );
};

export default Hero;