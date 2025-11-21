import React from "react";
import styles from "./workExperience.module.css";

const experiences = [
  {
    title: "Data and Business Analyst Intern",
    company: "Sanofi • AI CoE",
    date: "May 2023 – Apr. 2024 • Toronto, ON",
    bullets: [
      "Conducted exploratory data analysis (EDA) to map data flow and ensure accurate representation in Power BI dashboards.",
      "Designed SQLDBM data models and integrated transformations across multiple pipeline stages.",
      "Automated data quality checks using Dataiku + SQL, reducing validation time by 90%.",
      "Evaluated and strategized Generative AI initiatives for business value and feasibility.",
      "Created dynamic Power BI dashboards reducing analysis time by 50%.",
      "Awarded ‘Data Hero’ for excellence in analytics and business impact."
    ]
  },
  {
    title: "Restaurant Manager",
    company: "Anokhi Inspired Indian Dining",
    date: "Oct. 2024 – Mar. 2025 • Brampton, ON",
    bullets: [
      "Resolved guest issues promptly while maintaining a strong service standard.",
      "Supervised and trained a team of 15+ employees.",
      "Managed scheduling, inventory, and vendor relationships.",
      "Balanced administrative duties with high-presence floor management."
    ]
  },
  {
    title: "Restaurant Manager",
    company: "Anokhi Inspired Indian Dining",
    date: "July 2020 – Jan. 2022 • Brampton, ON",
    bullets: [
      "Led daily operations in a fine-dining environment with staff leadership.",
      "Recruited and trained new employees.",
      "Handled POS accuracy, cash handling, and order management.",
      "Boosted sales through upselling and personalized recommendations."
    ]
  },
  {
    title: "Server",
    company: "Anokhi Inspired Indian Dining",
    date: "Feb. 2019 – June 2020 • Brampton, ON",
    bullets: [
      "Provided friendly service to 25+ tables per shift.",
      "Recommended menu items to increase sales.",
      "Trained new servers on service standards and policies.",
      "Maintained an organized workspace to ensure a welcoming environment."
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.entry}>
            <h3 className={styles.title}>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.date}>{exp.date}</p>

            <ul className={styles.bullets}>
              {exp.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
