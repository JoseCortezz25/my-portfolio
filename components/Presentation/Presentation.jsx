import React from "react";
import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <section className={styles.Presentation} role="Sección de presentación personal">
      <h1>Hola a todos ✌</h1>
      <div className={styles.Presentation__content}>
        <div className={styles.Presentation__principal}>
          <span>Soy</span>
          <p><b>Alfonso Chavarro Cortes</b></p>
        </div>
        <p className={styles.Presentation__description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          voluptates culpa ipsum temporibus dolore tenetur reiciendis, dolor
          suscipit quae hic similique veniam possimus dolores fuga minus
          voluptatem quasi eos soluta.
        </p>
      </div>
    </section>
  );
};

export { Presentation };
