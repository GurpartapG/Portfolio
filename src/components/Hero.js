import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>

      <div className={styles.content}>
        <h1 className={styles.name}>Gurpartap Gill</h1>

        <h2 className={styles.subtitle}>
          Data Analyst & Data Engineering Enthusiast
        </h2>

        <p className={styles.tagline}>
          Pipelines • Analytics • Dashboards • Machine Learning
        </p>

        <p className={styles.supportLine}>
          Computer Science Student (Dec 2025) | Data & AI Enthusiast | Former Data & Business Analyst Intern @ Sanofi
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="resume-link-here" className={styles.btnSecondary}>Download Resume</a>
        </div>
      </div>

      <div className={styles.glow}></div>
    </div>
  );
}
