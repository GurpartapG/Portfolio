import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerText}>Gurpartap Gill</h1>
            <div className={styles.navItems}>
                <a href='#aboutme' className={styles.anchor}>
                    <i className={`fa-solid fa-user-astronaut ${styles.icons}`}></i>
                </a>
                <a href='#education' className={styles.anchor}>
                    <i className={`fa-solid fa-medal ${styles.icons}`}></i>
                </a>
                <a href='#projects' className={styles.anchor}>
                    <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
                </a>
                <a href='#footer' className={styles.anchor}>
                    <i className={`fa-solid fa-envelope ${styles.icons}`}></i>
                </a>
            </div>
        </header>
    )
}

