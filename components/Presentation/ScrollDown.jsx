import React from "react";
import styles from "./Presentation.module.css";
import downIcon from "../../public/static/icons/down.svg";
import Image from "next/image";

const ScrollDown = () => {
  return (
    <div className={styles.home__scroll}>
      <a href="#about" className={`${styles['home__scroll-button']} button--flex`}>
        <Image src={downIcon} alt="asdas" />
        <span className={`${styles['home__scroll-name']}`}>Scroll down</span>
      </a>
    </div>
  );
};

export { ScrollDown };
