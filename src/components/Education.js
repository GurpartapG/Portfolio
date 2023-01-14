import React from 'react'
import styles from './education.module.css'
import Sectionintroduction from './Sectionintroduction'
import ListEntry from './ListEntry'
import mysql from '../assets/mysql.png'


export default function Education() {
    return (
        <section id='education'>
            <div className={styles.wrapper}>
                <Sectionintroduction dark={true}>
                    EDUCATION
                </Sectionintroduction>
                <div className={styles.sectionContent}>
                    <ListEntry title={"York University"} date={"September 2022 - December 2025"}>
                        <li>
                            <p>BSc. Hons. Computer Science</p>
                            <li><p>Director of Events for TechLife</p></li>
                        </li>
                    </ListEntry>
                    <ListEntry title={"Sheridan College"} date={"September 2018 - April 2020"}>
                        <li>
                            <p>Computer System Technician - Software Engineering</p>
                            <li><p>Achieved International Student Award for Outstanding <br></br>Achievement in Academics and Community Involvement<br></br>2018 & 2019</p></li>
                        </li>
                    </ListEntry>
                    <ListEntry title={"Delhi Public School"} date={"April 2004 - April 2018"}>
                        <li>
                            <p>High School</p>
                            <li><p>Served as a member of student council for 5 years</p></li>
                        </li>
                    </ListEntry>
                </div>

                <div className={styles.skills}>
                    <ul className={styles.title}>
                        <li className={styles.list}>
                            <i className="fa-brands fa-java"></i> &nbsp;Java
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-python"></i> &nbsp;python
                        </li>
                        <li className={styles.list}>
                            <i className="fa-solid fa-c"></i> &nbsp;C
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-square-js"></i> &nbsp;JavaScript
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-html5"></i> &nbsp;HTML
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-css3-alt"></i> &nbsp;CSS
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-react"></i> &nbsp;React
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-git-alt"></i> &nbsp;Git
                        </li>
                        <li className={styles.list}>
                            <i className="fa-brands fa-node-js"></i> &nbsp;Node.js
                        </li>
                        <li className={styles.list}>
                        <i className="fa fa-mysql" aria-hidden="true"></i>&nbsp;MySql
                        </li>
                        <li className={styles.list}>
                        <i className="fa fa-csharp" aria-hidden="true"></i>&nbsp;C#
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}
