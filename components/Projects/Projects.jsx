import iconLink from "../../public/static/icons/link.svg";
import styles from "./Projects.module.css";
import Image from "next/image";
import { projects } from "../../helpers/data";

const Projects = () => {
  return (
    <section
      className={`${styles.Projects} container`}
      role="sección de proyectos personales"
      id="projects"
    >
      <h2 className="section__title">Proyectos personales</h2>
      <span className="section__subtitle"></span>

      <div className={`${styles.Projects__feed} grid`}>
        {projects.map((project) => (
          <div className={styles.CardProject} key={project.name}>
            <div className={styles.CardProjects__header}>
              <img
                src={project.images[0]}
                alt={`Imagel del proyecto ${project.name}`}
              />
            </div>
            <div className={styles.CardProjects__body}>
              <h3>{project.name}</h3>
              <a href={project.repo} target="_blank" rel="noreferrer">
                <button className={styles.btnExternal}>
                  <Image
                    src={iconLink}
                    alt="Icono de flecha que indica un enlace para redirigir a otra página"
                  />
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* <div className={styles.CardProject}>
          <div className={styles.CardProjects__header}>
            <img src="https://via.placeholder.com/300%" />
          </div>
          <div className={styles.CardProjects__body}>
            <h3>Robot aspirador inteligente</h3>
            <button className={styles.btnExternal}>
              <Image
                src={iconLink}
                alt="Icono de flecha que indica un enlace para redirigir a otra página"
              />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export { Projects };
