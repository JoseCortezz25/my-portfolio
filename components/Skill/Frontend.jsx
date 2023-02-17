import React from "react";
import styles from "./Skill.module.css";
import Image from "next/image";
import badgeIcon from "../../public/static/icons/badge.svg"

const Frontend = () => {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>Frontend</h3>

      <div className={styles.skills__box}>

        <div className={styles.skills__group}>

          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>
          
          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>



        </div>
        <div className={styles.skills__group}>

          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <div className={styles.skills__icon}>
              <Image src={badgeIcon} alt="asdasdas"/>
            </div>

            <div>
              <h3 className={styles.skills__name}>HTML</h3>
              <span className={styles.skills__level}>Intermedio</span>
            </div>
          </div>



        </div>
        
      </div>
    </div>
  );
};

export { Frontend };
