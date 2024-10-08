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
                            <ul>
                            <li><p>Director of Events for TechLife</p></li>
                            <li><p>Recipient of Provost’s Award for Fall/Winter 2022 based on academic merit</p></li>
                            </ul>
                        </li>
                    </ListEntry>
                    <ListEntry title={"Sheridan College"} date={"September 2018 - April 2020"}>
                        <li>
                            <p>Computer System Technician - Software Engineering</p>
                            <ul>
                            <li><p>Achieved International Student Award for Outstanding <br></br>Achievement in Academics and Community Involvement<br></br>2018 & 2019</p></li>
                            </ul>
                        </li>
                    </ListEntry>
                    <ListEntry title={"Delhi Public School"} date={"April 2004 - April 2018"}>
                        <li>
                            <p>High School</p>
                            <ul>
                            <li><p>Served as a member of student council for 5 years</p></li>
                            </ul>
                        </li>
                    </ListEntry>
                </div>
            </div>
        </section>
    )
}
