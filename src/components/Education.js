// src/components/Education.js
import React from "react";
import styles from "./education.module.css";

export default function Education() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Education</h2>

      <div className={styles.timeline}>

        {/* YORK */}
        <div className={styles.item}>
          <div className={styles.dot}></div>

          <div className={styles.content}>
            <h3>BSc. (Hons) Computer Science</h3>
            <p className={styles.school}>
              York University • Sep 2022 – Dec 2025
            </p>

            <span className={styles.badge}>Provost’s Award</span>

            <details>
              <summary>Relevant Courses</summary>
              <ul>
                <li>Applied Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Data Mining</li>
                <li>Big Data Systems</li>
                <li>Database Systems</li>
                <li>AI & Logic Programming</li>
                <li>Design and Analysis of Algorithms</li>
              </ul>
            </details>
          </div>
        </div>

        {/* SHERIDAN */}
        <div className={styles.item}>
          <div className={styles.dot}></div>

          <div className={styles.content}>
            <h3>Computer Systems Technician — Software Engineering</h3>
            <p className={styles.school}>
              Sheridan College • Sep 2018 – Apr 2022
            </p>

            <span className={styles.badge}>International Student Award (2019)</span>
            <span className={styles.badge}>International Student Award (2018)</span>

            <details>
              <summary>Relevant Courses</summary>
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Database Management</li>
                <li>Software Design Fundamentals</li>
                <li>Web Development</li>
                <li>IT Project Management</li>
              </ul>
            </details>
          </div>
        </div>

      </div>
    </section>
  );
}
