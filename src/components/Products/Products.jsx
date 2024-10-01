import React from 'react';
import styles from "./styles.module.css"
import ProductCard from "./ProductCard.jsx";
import Link from "../Button/Link.jsx";
import {products} from "../../constants/data.js";


const Products = () => {
  return (
    <section className={styles["products"]}>
     <div className={styles["products-wrapper"]}>
       <h2>Обирай свій смак</h2>
       <p className={styles["products-subtitle"]}>якийсь текст </p>
       <div className={styles["products-list"]}>
         {products.map(({id, price, title, img, options} ) => (
           <ProductCard key={id} {...{id, price, title, img, options}}/>
         ))}
       </div>
     </div>
      <div className={styles["products-order"]}>
        <Link btnStyle='secondary'>Замовити</Link>
      </div>
    </section>
  );
};

export default Products;