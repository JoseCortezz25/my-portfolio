import React from "react";
import styles from "./Presentation.module.css";
import { Social } from "./Social";
import { Information } from "./Information";
import { ScrollDown } from "./ScrollDown";

const Presentation = () => {
  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <Social />
          <div className={styles.home__img}> </div>
          <Information />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export { Presentation };
