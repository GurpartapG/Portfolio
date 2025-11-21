import React from "react";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className={styles.section}>
      <h2 className="section-title">About Me</h2>

      <div className={styles.cardWrapper}>
        <p>
          I’m a Computer Science student specializing in <strong>data, analytics, and AI</strong> —
          driven by a love for transforming complex, messy information into clean insights.
          My experience at <strong>Sanofi’s AI Centre of Excellence</strong> shaped much of my
          technical direction, from building ETL workflows and data models to designing dashboards
          and evaluating Generative AI strategy frameworks.
        </p>

        <p>
          I enjoy working at the intersection of <strong>analytics, engineering, and product
          thinking</strong>, and I’m continuously expanding my portfolio with hands-on technical
          projects as I approach graduation in December 2025.
        </p>

        <p>
          Outside of tech, you’ll usually find me exploring new cafés and restaurants, saving future
          spots on Google Maps, or tending to my plant collection. I love long walks, nature, trying
          (and failing) DIY projects, and slowly rebuilding my reading habit. I’m still honing my
          coding skills — semicolons remain my sworn enemies — and hopefully I’ll leave behind a
          legacy one day (assuming an alien invasion doesn’t rewrite the roadmap first).
        </p>
      </div>
    </section>
  );
}
