import React from "react";
import styles from "./Experience.module.css";
import graduateIcon from "../../public/static/icons/graduate.svg";
import workIcon from "../../public/static/icons/work.svg";
import Image from "next/image";

const Experience = () => {
  return (
    <section className={`${styles.qualification} section`} id="experience">
      <h2 className="section__title">Experiencia</h2>
      <span className="section__subtitle"></span>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__tabs}>
          <div
            className={`${styles.qualification__button} ${styles.qualification__active} button--flex`}
          >
            <span className={styles.qualification__icon}>
              <Image src={graduateIcon} alt="Icono de un calendario" />
            </span>
            Educación
          </div>
          <div className={`${styles.qualification__button} button--flex`}>
            <span className={styles.qualification__icon}>
              <Image src={workIcon} alt="Icono de un calendario" />
            </span>
            Experiencia
          </div>
        </div>

        <div className={styles.qualification__sections}>
          <div className={styles.qualification__content}>
            
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Ingeniería de Sistemas</h3>
                <span className={styles.qualification__subtitle}>
                  Corporación Universitaria del Huila
                </span>
                <div className={styles.qualification__calender}>
                  2018 - 2023
                </div>
              </div>

              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div>
                <h3 className={styles.qualification__title}>
                  Frontend Developer, Trinity FS
                </h3>
                <span className={styles.qualification__subtitle}>
                  Práctica Laboral
                </span>
                <div className={styles.qualification__calender}>
                  Sep 2022 - Dic 2022
                </div>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>
                  Diplomado Machine Learning con Python
                </h3>
                <span className={styles.qualification__subtitle}>
                  Corporación Universitaria del Huila
                </span>
                <div className={styles.qualification__calender}>
                  2023
                </div>
              </div>

              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div>
                <h3 className={styles.qualification__title}>
                  Junior Frontend Developer, The Makers
                </h3>
                <span className={styles.qualification__subtitle}>
                  Dic 2020 - Feb 2021
                </span>
                {/* <div className={styles.qualification__calender}>
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Experience };
