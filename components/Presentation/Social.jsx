import React from "react";
import githubIcon from "../../public/static/icons/Github-fill-dark.svg";
import linkedinIcon from "../../public/static/icons/Linkedin-dark.svg";
import Image from "next/image";
import styles from './Presentation.module.css'

const Social = () => {
  return (
    <div className={styles.home__social}>
      <a href="https://github.com/JoseCortezz25" className={styles['home__social-icon']} target="_blank" rel="noreferrer">
        <Image src={githubIcon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/alfonsochavarrocortes/" className={styles['home__social-icon']} target="_blank" rel="noreferrer">
        <Image src={linkedinIcon} alt="" />
      </a>
    </div>
  );
};

export { Social };
