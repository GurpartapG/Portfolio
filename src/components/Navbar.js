import React, { useState } from "react";
import styles from "./navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.desktopLinks}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button className={styles.hamburger} onClick={handleToggle}>
          {open ? <IoClose size={26} /> : <RxHamburgerMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className={styles.mobileMenu}>
          <a href="#home" onClick={handleClose}>Home</a>
          <a href="#projects" onClick={handleClose}>Projects</a>
          <a href="#skills" onClick={handleClose}>Skills</a>
          <a href="#about" onClick={handleClose}>About</a>
          <a href="#education" onClick={handleClose}>Education</a>
          <a href="#contact" onClick={handleClose}>Contact</a>
        </div>
      )}
    </>
  );
}
