import React from "react";
import { Box } from "./Box";
import styles from "./Skill.module.css";
import { tools, languages } from "../../helpers/data";

const Skill = () => {
  return (
    <section className={`${styles.skills} section`} id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className={`${styles.skills__container} container grid`}>
        <Box content={languages} title="Lenguajes de desarrollo" />
        <Box content={tools} title="Herramientas" />
      </div>
    </section>
  );
};

export { Skill };
