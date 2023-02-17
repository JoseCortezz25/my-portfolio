import React from "react";
import { Box } from "./Box";
import { Frontend } from "./Frontend";
import styles from "./Skill.module.css";

const Skill = () => {
  const tools = [
    {
      id: "1",
      name: "VS Code"
    },
    {
      id: "2",
      name: "Git"
    },
    {
      id: "3",
      name: "Github"
    },
    {
      id: "4",
      name: "Hyper Terminal"
    },
    {
      id: "5",
      name: "Notion"
    },
    {
      id: "6",
      name: "Figma"
    },
    {
      id: "7",
      name: "Postman"
    },
  ];

  const languages = [
    {
      id: "1",
      name: "JavaScript (ES6+)",
    },
    {
      id: "2",
      name: "HTML",
    },
    {
      id: "3",
      name: "CSS",
    },
    {
      id: "4",
      name: "React",
    },
    {
      id: "5",
      name: "SASS",
    },
    {
      id: "6",
      name: "NodeJS",
    },
    {
      id: "7",
      name: "Express",
    },
    {
      id: "8",
      name: "TypeScript",
    },
    {
      id: "9",
      name: "Python",
    },
  ];

  return (
    <section className={`${styles.skills} section`} id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className={`${styles.skills__container} container grid`}>
        {/* <Frontend /> */}
        <Box content={languages} title="Lenguajes de desarrollo" />
        <Box content={tools} title="Herramientas" />
      </div>
    </section>
  );
};

export default Skill;
