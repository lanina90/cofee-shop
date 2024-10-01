import React, {useState} from 'react';
import styles from "./styles.module.css"
import Button from "../Button/Button.jsx";

const ProductCard = ({id, price, title, img, options}) => {
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);

  const optionsHandler = (i) => {
    setSelectedPrice(i)
    setSelectedWeight(i)
  }


  return (
    <div key={id} className={styles["product-card"]}>
      <div className={styles["product-image"]} style={{ backgroundImage: `url(${img})`}}/>
      <div className={styles["product-content"]}>
        <h3 className={styles["product-content-title"]}>{title}</h3>
        <div className={styles["product-content-options"]}>
          <p>Вага, гр: </p>
          <div className={styles["product-content-options-list"]}>
            {options.map((item, i) => (
              <Button
                onClick={()=> optionsHandler(i)}
                key={`${item}-${i}`}
                btnStyle='tertiary'
                isActive={selectedWeight === i}
              >{item}</Button>
            ))}
          </div>
        </div>
        <div className={styles["product-content-options"]}>
          <p>Вартість: </p>
          <div className={styles["product-content-options-list"]}>
            {price.map((item, i) => (
              <Button
                onClick={()=> optionsHandler(i)}
                key={`${item}-${i}`}
                btnStyle='tertiary'
                isActive={selectedPrice === i}>
                {item}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;