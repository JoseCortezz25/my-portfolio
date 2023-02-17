import React, { useState } from "react";
import Image from "next/image";
import menuIcon from "../../public/static/icons/menu.svg";
import closeIcon from "../../public/static/icons/close.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [toggle, showMenu] = useState(false);

  console.log("toggle", toggle);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="" className={styles.nav__logo}>
          Alfonso
        </a>

        <div
          className={
            toggle
              ? `${styles.nav__menu} ${styles.show_menu}`
              : `${styles.nav__menu}`
          }
        >
          <ul className={`${styles.nav__list} grid`}>
            <li className={styles.nav__item}>
              <a
                href="#home"
                className={`${styles.nav__link} ${styles.active_link}`}
              >
                Home
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#skills" className={styles.nav__link}>
                Skills
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#projects" className={styles.nav__link}>
                Proyectos
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#experience" className={styles.nav__link}>
              Experiencia
              </a>
            </li>
          </ul>

          <i
            className={styles.nav__close}
            onClick={() => showMenu((prevState) => !prevState)}
          >
            <Image src={closeIcon} alt="" />
          </i>
        </div>

        <div
          className={styles.nav__toggle}
          onClick={() => showMenu((prevState) => !prevState)}
        >
          <Image src={menuIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};

export { Header };
