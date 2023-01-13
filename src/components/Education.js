import React from 'react'
import styles from './education.module.css'
import Sectionintroduction from './Sectionintroduction'
import ListEntry from './ListEntry'


export default function Education() {
    return (
        <section id='education'>
            <div className={styles.wrapper}>
                <Sectionintroduction dark={true}>
                    EDUCATION
                </Sectionintroduction>
                <div className={styles.sectionContent}>
                    <ListEntry title={"Delhi Public School"} date={"April 2004 - April 2018"}>
                        <li>
                            High School
                        </li>
                    </ListEntry>
                    <ListEntry title={"Sheridan College"} date={"September 2018 - April 2020"}>
                        <li>
                            Post secondary diploma in Computer System Technician - Software Engineering
                        </li>
                    </ListEntry>
                    <ListEntry title={"York University"} date={"September 2022 - December 2025"}>
                        <li>
                            BSc. Hons. Computer Science
                        </li>
                    </ListEntry>
                </div>
            </div>
        </section>
 )
}
