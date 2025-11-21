import React from "react";
import projectsData from "./dataProjects.js";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Featured Projects</h2>

      <div className={styles.allCards}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
