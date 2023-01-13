import React from 'react'
import styles from './listEntry.module.css'

export default function listEntry(props) {
    const { title, date, children } = props
    return (
        <div>
            <div className={styles.headerWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.date}>{date}</h1>
            </div>
            <ul className={styles.ul}>
                {children}
            </ul>
        </div>
    )
}
