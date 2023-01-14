import React from 'react'

import styles from './aboutMe.module.css'
import Sectionintroduction from './Sectionintroduction'
import me from '../assets/me.jpg'
import mebw from '../assets/mebw.jpg'

export default function Aboutme() {
    return (

        <section id='aboutme' className={styles.aboutMe}>
            <div className={styles.wrapper}>
                <Sectionintroduction>
                    ABOUT ME
                </Sectionintroduction>

                <div className={styles.sectionContent}>

                    <p className={styles.paragraph}>
                        Gurpartap Gill (he/him) is pursuing his passion for coding
                        and tech as a Computer Science major at York University.
                        He likes to spend his time on developing new projects, reading about
                        recent inventions, and hoarding knowledge about all the innovative gadgets.
                        He is aiming to hone his coding skills, but those damn semicolons always give
                        him a hard time. With a huge heart and big dreams, Gill is trying to establish
                        himself in the tech industry so that fifty years down the line he has left the
                        next generation with a legacy to look up to (the plan depends on an alien invasion
                        happening in the foreseeable future).
                    </p>

                    <div className={styles.container}>
                        <img src={me} className={styles.imageDisp} title='Gps'></img>

                        <div className={styles.overlay}>
                            <img src={mebw} className={styles.bw} title='Gps'></img>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
