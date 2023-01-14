import React from 'react'
import styles from './imgoverlay.module.css'

export default function ImgOverlay(props) {
    const { imgSrc, title, children, github } = props
    return (
        <div className={styles.imgDisplay}>
            <img className={styles.img} src={imgSrc} alt="proj" />
            <div className={styles.overlay}>
                <h2 className={styles.overlayHeader}>{title.toUpperCase()}</h2>
                <p className={styles.paragraph}>
                    {children}
                </p>
                <div className={styles.links}>
                    <a href={github} rel="noreferrer" target="_blank" className={styles.button}><i className={`fa-brands fa-github ${styles.icon}`}>
                    </i></a>
                </div>
            </div>
        </div>
    )
}
