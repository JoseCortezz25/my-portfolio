import React from "react";
import styles from "./Skill.module.css";
import badgeIcon from "../../public/static/icons/badge.svg";
import Image from "next/image";

const Box = ({ content, title }) => {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>{title}</h3>

      <div className={styles.skills__box}>
        <div className={styles.skills__group}>
          {content.map((tool) => (
            <div className={styles.skills__data} key={tool.id}>
              <div className={styles.skills__icon}>
                <Image src={badgeIcon} alt="Icono badge" />
              </div>

              <div>
                <h3 className={styles.skills__name}>{tool.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Box };
