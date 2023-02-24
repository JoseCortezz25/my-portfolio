import React from "react";
import Image from "next/image";
import githubIcon from "../../public/static/icons/Github-fill-dark.svg";
import externalLinkIcon from "../../public/static/icons/external-link.svg";

const CardProject = ({ styles, project }) => {
  return (
    <div className={styles.CardProject} >
      <div className={styles.CardProjects__header}>
        <img
          src={project.images[0]}
          alt={`Imagel del proyecto sobre ${project.name}`}
        />
      </div>
      <div className={styles.CardProjects__body}>
        <div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="section__button">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <button className={`button__standard btn__secondary`}>
              <Image
                src={githubIcon}
                alt="Icono de flecha que indica un enlace para redirigir a otra página"
              />
              Repositorio
            </button>
          </a>
          <a href={project.page} target="_blank" rel="noreferrer">
            <button className={`button__standard btn__primary`}>
              <Image
                src={externalLinkIcon}
                alt="Icono de flecha que indica un enlace para redirigir a otra página"
              />
              Ver proyecto
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { CardProject };
