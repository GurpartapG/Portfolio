import React from "react";
import styles from "./projects.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent}>
        
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.bullets}>
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {project.tech.map((t, idx) => (
            <span key={idx} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.buttons}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
              View on GitHub
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              View Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
