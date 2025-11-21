// src/components/SkillsAndCertificates.js
import React from "react";
import styles from "./skillsAndCertificates.module.css";

export default function SkillsAndCertificates() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Skills & Certificates</h2>

      {/* ===================== SKILLS ===================== */}
      <div className={styles.categories}>

        {/* Programming */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Programming Languages</h3>
          <div className={styles.tags}>
            <span>Python</span>
            <span>SQL</span>
            <span>Java</span>
            <span>C</span>
            <span>C#</span>
          </div>
        </div>

        {/* Data Analysis */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Data Analysis & Visualization</h3>
          <div className={styles.tags}>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>SciPy</span>
            <span>Power BI</span>
          </div>
        </div>

        {/* ML */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Machine Learning & AI</h3>
          <div className={styles.tags}>
            <span>Scikit-Learn</span>
            <span>XGBoost</span>
            <span>Feature Engineering</span>
            <span>Model Evaluation</span>
            <span>TextBlob</span>
            <span>BeautifulSoup</span>
            <span>Jupyter / Colab</span>
          </div>
        </div>

        {/* Data Engineering */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Data Engineering & Pipelines</h3>
          <div className={styles.tags}>
            <span>Snowflake</span>
            <span>Dataiku</span>
            <span>SQLDBM</span>
            <span>SQLite</span>
            <span>ETL Pipelines</span>
            <span>Data Modeling</span>
            <span>SQL Optimization</span>
            <span>Python Logging</span>
            <span>Alteryx</span>
          </div>
        </div>

        {/* Cloud & Tools */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Cloud & Dev Tools</h3>
          <div className={styles.tags}>
            <span>AWS</span>
            <span>Git</span>
            <span>VS Code</span>
          </div>
        </div>

        {/* ===================== CERTIFICATIONS ===================== */}
        <div className={styles.category}>
          <h3 className={styles.catTitle}>Certificates</h3>
          <div className={styles.certGrid}>
            <span className={styles.certCard}>Snowflake • Data Engineering Workshop</span>
            <span className={styles.certCard}>Snowflake • Data Lake Warehouse</span>
            <span className={styles.certCard}>Snowflake • Collaboration & Cost Estimation</span>
            <span className={styles.certCard}>Snowflake • Data Warehousing Workshop</span>
            <span className={styles.certCard}>AWS • Technical Essentials</span>
          </div>
        </div>
      </div>
    </section>
  );
}
