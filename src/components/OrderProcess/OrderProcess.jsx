import React from 'react';
import styles from "./styles.module.css"

const OrderProcess = () => {
  return (
    <section className={styles["ordering"]}>
      <div className={styles["ordering-wrapper"]}>
        <h2>Замовлення і Доставка</h2>
        <div className={styles["ordering-info"]}>
          Тут текст як замовити і умови та сроки доставки, оплата і всяке таке
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;