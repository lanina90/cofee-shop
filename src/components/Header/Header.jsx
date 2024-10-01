import React from 'react';
import styles from "./styles.module.css"
import Link from "../Button/Link.jsx";

const Header = () => {
  return (
    <header className={styles["header"]}>
     <div className={styles["header-wrapper"]}>
       <div className={styles["header-logo"]}>
         <img src="/logo.png" alt="logo" width={80} height={80}/>
       </div>
       <Link btnStyle="secondary">Замовити</Link>
     </div>
    </header>
  );
};

export default Header;