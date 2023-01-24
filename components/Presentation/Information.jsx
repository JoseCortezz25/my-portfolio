import React from "react";
import messageIcon from '../../public/static/icons/message.svg'
import Image from "next/image";
import styles from './Presentation.module.css'

const Information = () => {
  return (
    <div className={styles.home__data}>
      <h1 className={styles.home__title}>Alfonso Chavarro 🖐</h1>
      <h3 className={styles.home__subtitle}>Developer Frontend</h3>
      <p className={styles.home__description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus dicta perspiciatis nulla autem odit fuga dolorum voluptatibus.
      </p>

      <a href="#contact" className={`button button--flex`}>
        Say hello
        <Image src={messageIcon} alt=""/>
      </a>
    </div>
  );
};

export { Information };
