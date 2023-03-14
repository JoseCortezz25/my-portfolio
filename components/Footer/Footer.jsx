import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import githubIcon from "../../public/static/icons/Github-fill-dark.svg";
import linkedinIcon from "../../public/static/icons/Linkedin-dark.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <h1 className={`${styles.footer__title}`}>Alfonso</h1>
        <ul className={`${styles.footer__list}`}>
          <li>
            <a href="#" className={styles.footer__link}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.footer__link}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.footer__link}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experience" className={styles.footer__link}>
            Experiencia
            </a>
          </li>
        </ul>
        <div className={`${styles.footer__social}`}>
          {" "}
          <a
            href="https://github.com/JoseCortezz25"
            className={styles["footer__social-icon"]}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubIcon} alt="" />
          </a>
          <a
            href="https://linkedin.com/in/alfonsochavarrocortes"
            className={styles["footer__social-icon"]}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedinIcon} alt="" />
          </a>
        </div>
        <div className={styles.footer__copy}>Hecho con amor y café. ❤☕ </div>
      </div>
    </footer>
  );
};

export { Footer };
