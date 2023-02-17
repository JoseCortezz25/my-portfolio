import React from "react";
import downloadIcon from "../../public/static/icons/download.svg";
import Image from "next/image";
import styles from "./Presentation.module.css";

const Information = () => {
  return (
    <div className={styles.home__data}>
      <h1 className={styles.home__title}>Alfonso Chavarro 🖐</h1>
      <h3 className={styles.home__subtitle}>Developer Frontend</h3>
      <p className={styles.home__description}>
        Hola, soy Alfonso Chavarro, un apasionado desarrollador frontend e
        ingeniero de sistemas. Además de mis habilidades en el frontend, también
        tengo conocimientos básicos en backend con Node.js y herramientas como
        Express y bases de datos. <br />
        Como persona autodidacta, siempre estoy buscando aprender nuevas
        habilidades y enfrentar nuevos desafíos.
      </p>
      <a
        href="../../public/static/resume.pdf"
        download
        // download="../../public/static/CV2 - Alfonso José Chavarro Cortes.pdf"
        className={`button button--flex`}
      >
        Descargar CV
        <Image src={downloadIcon} alt="" />
      </a>
    </div>
  );
};

export { Information };
