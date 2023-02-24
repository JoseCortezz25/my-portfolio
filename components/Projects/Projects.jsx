import styles from "./Projects.module.css";
import { CardProject } from "../CardProject/CardProject";
import { projects } from "../../helpers/data";

const Projects = () => {
  return (
    <section
      className={`${styles.Projects} section`}
      role="sección de proyectos personales"
      id="projects"
    >
      <h2 className="section__title">Proyectos personales</h2>
      <span className="section__subtitle"></span>

      <div className={`${styles.Projects__feed} grid`}>
        {projects.map((project) => (
          <CardProject 
            project={project} 
            styles={styles} 
            key={project.name}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };
