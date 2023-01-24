import React from "react";
import githubIcon from "../../public/static/icons/Github-fill-dark.svg";
import linkedinIcon from "../../public/static/icons/Linkedin-dark.svg";
import Image from "next/image";
import styles from './Presentation.module.css'

const Social = () => {
  return (
    <div className={styles.home__social}>
      <a href="" className={styles['home__social-icon']} target="_blank">
        <Image src={githubIcon} alt="" />
      </a>
      <a href="" className={styles['home__social-icon']} target="_blank">
        <Image src={linkedinIcon} alt="" />
      </a>
    </div>
  );
};

export { Social };
