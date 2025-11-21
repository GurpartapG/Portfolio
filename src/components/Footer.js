import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <p className={styles.tagline}>Let’s Connect ✨</p>

      <div className={styles.links}>
        <a
          href="https://github.com/GurpartapG"
          className={styles.button}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/gurpartap-gill/"
          className={styles.button}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="mailto:gurpartap22gill@gmail.com?subject=Hello%20Gurpartap!"
          className={styles.button}
        >
          Email
        </a>
      </div>

      <p className={styles.copy}>© 2025 Gurpartap Gill</p>

    </footer>
  );
}

