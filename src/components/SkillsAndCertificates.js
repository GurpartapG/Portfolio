import React from 'react';
import styles from './skillsAndCertificates.module.css';
import SectionIntroduction from './Sectionintroduction';

export default function SkillsAndCertificates() {
    return (
        <section id="skillsAndCertificates">
            <div className={styles.wrapper}>
                <SectionIntroduction dark={false}>
                    SKILLS & CERTIFICATES
                </SectionIntroduction>

                <div className={styles.sectionContent}>

                    {/* Programming Languages */}
                    <h2 className={styles.categoryTitle}>Programming Languages</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa-brands fa-java"></i> Java</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Python</div>
                        <div className={styles.skillItem}><i className="fa-solid fa-c"></i> C</div>
                        <div className={styles.skillItem}><i className="fa-solid fa-c"></i> C#</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-square-js"></i> JavaScript</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-html5"></i> HTML</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-css3-alt"></i> CSS</div>
                        <div className={styles.skillItem}><i className="fa fa-database"></i> SQL</div>
                        <div className={styles.skillItem}><i className="fa-solid fa-brain"></i> Prolog</div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <h2 className={styles.categoryTitle}>Frameworks & Libraries</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa-brands fa-react"></i> React (Native)</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-angular"></i> Angular</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-node-js"></i> Node.js</div>
                        <div className={styles.skillItem}><i className="fa fa-flask"></i> Flask</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Django</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> NumPy</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Pandas</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Scikit Learn</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Matplotlib</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Plotly</div>
                    </div>

                    {/* Cloud & Databases */}
                    <h2 className={styles.categoryTitle}>Cloud & Databases</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa-brands fa-aws"></i> AWS</div>
                        <div className={styles.skillItem}><i className="fa fa-snowfake"></i> Snowflake</div>
                        <div className={styles.skillItem}><i className="fa fa-share-nodes"></i> Neo4j</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-envira"></i> MongoDB</div>
                        <div className={styles.skillItem}><i className="fa fa-database"></i> SQL Databases (MySQL, SQL Server, Oracle)</div>
                    </div>

                     {/* Business Intelligence & Data Science Tools */}
                     <h2 className={styles.categoryTitle}>Business Intelligence & Data Science Tools</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa fa-chart-simple"></i> Power BI</div>
                        <div className={styles.skillItem}><i className="fa fa-crow"></i> Dataiku</div>
                        <div className={styles.skillItem}><i className="fa fa-chart-bar"></i> Alteryx</div>
                    </div>

                    {/* Tools & Technologies */}
                    <h2 className={styles.categoryTitle}>Tools & Technologies</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa-brands fa-git-alt"></i> Git</div>
                        <div className={styles.skillItem}><i className="fa fa-terminal"></i> Visual Studio</div>
                        <div className={styles.skillItem}><i className="fa fa-laptop"></i> IntelliJ</div>
                        <div className={styles.skillItem}><i className="fa fa-laptop"></i> Eclipse</div>
                        <div className={styles.skillItem}><i className="fa fa-desktop"></i> NetBeans</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> Anaconda</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-python"></i> PyCharm</div>
                        <div className={styles.skillItem}><i className="fa-solid fa-laptop-code"></i> Postman</div>
                        <div className={styles.skillItem}><i className="fa fa-code"></i> Pelles C</div>
                        <div className={styles.skillItem}><i className="fa fa-search"></i> Selenium</div>
                        <div className={styles.skillItem}><i className="fa fa-search"></i> Beautiful Soup</div>
                    </div>

                    {/* Design & Prototyping */}
                    <h2 className={styles.categoryTitle}>Design & Prototyping</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillItem}><i className="fa-brands fa-invision"></i> InVision</div>
                        <div className={styles.skillItem}><i className="fa-brands fa-figma"></i> Figma</div>
                    </div>

                    {/* Certifications */}
                    <h2 className={styles.certificationsTitle}>Certifications</h2>
                      <ul className={styles.certificationList}>
                        <li>
                          Hands-On Essentials: Data Engineering Workshop | <span className={styles.companyName}>Snowflake</span>
                        </li>
                        <li>
                          Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop | <span className={styles.companyName}>Snowflake</span>
                        </li>
                        <li>
                          Hands-On Essentials: Data Lake Warehouse | <span className={styles.companyName}>Snowflake</span>
                        </li>
                        <li>
                          Hands-On Essentials: Data Warehousing Workshop | <span className={styles.companyName}>Snowflake</span>
                        </li>
                        <li>
                          Amazon Web Services Technical Essentials | <span className={styles.companyName}>AWS</span>
                        </li>
                      </ul>
                </div>
            </div>
        </section>
    );
}
