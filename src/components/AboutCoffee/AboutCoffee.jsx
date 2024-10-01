import React, {useState} from 'react';
import styles from "./styles.module.css"
import {coffeeTypes} from "../../constants/data.js";
import classNames from "classnames";
import Rating from "../Products/Rating.jsx";
import Link from "../Button/Link.jsx";


const AboutCoffee = () => {
  const [activeTab, setActiveTab] = useState(coffeeTypes[0].name);

  return (
    <section className={styles["coffee"]}>
      <h2>Назва розділу про каву</h2>
      <div className={styles["coffee-wrapper"]}>
        <div className={styles["coffee-wrapper-tabs"]}>
          {coffeeTypes.map(({name}) => (
            <div
              onClick={() => setActiveTab(name)}
              key={name}
              className={classNames(styles["coffee-wrapper-tab"], activeTab === name && styles["active"])}
            >{name}</div>
          ))}
        </div>
        <div className={styles["coffee-wrapper-text"]}>
          {coffeeTypes.map(({
                              name,
                              text,
                              caffeine,
                              aroma,
                              bitterness,
                              acidity,
                              flavorIntensity,
                              creaminess,
                              sweetness,
                              aftertaste
                            }) => (
            activeTab === name && (
              <div
                key={`${name}-desc`}
                className={styles["coffee-wrapper-tab-content"]}
              >
                <ul>
                  <li>Вміст кофеїну: <div><Rating number={caffeine}/></div></li>
                  <li>Аромат: <div><Rating number={aroma}/></div></li>
                  <li>Гіркота: <div><Rating number={bitterness}/></div></li>
                  <li>Кислота: <div><Rating number={acidity}/></div></li>
                  <li>Вираженість смаку: <div><Rating number={flavorIntensity}/></div></li>
                  <li>Кремовість: <div><Rating number={creaminess}/></div></li>
                  <li>Солодкість: <div><Rating number={sweetness}/></div></li>
                  <li>Тривалість післясмаку: <div><Rating number={aftertaste}/></div></li>
                </ul>
                <p>{text}</p>
              </div>
            )
          ))}
        </div>
      </div>
      <Link btnStyle="secondary">Замовити</Link>
    </section>
  );
};

export default AboutCoffee;