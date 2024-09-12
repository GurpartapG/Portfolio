import React from 'react';
import styles from './workListEntry.module.css';

export default function WorkListEntry(props) {
    const { title, company, location, date, children } = props;
    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.titleCompany}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.company}>{company}</p> {/* Company under title */}
                </div>
                <div className={styles.dateLocation}>
                    <h1 className={styles.date}>{date}</h1>
                    <p className={styles.location}>{location}</p> {/* Location under date */}
                </div>
            </div>
            <ul className={styles.ul}>
                {children}
            </ul>
        </div>
    );
}
