import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div id="footer" className={styles.footerWrapper}>
      Contact:
      <a href="mailto:gurpartap22gill@gmail.com" className={styles.icon}>
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="https://github.com/GurpartapG" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/gurpartap-gill/" rel="noreferrer" target="_blank" className={styles.icon}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  )
}
