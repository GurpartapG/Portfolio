import React from 'react'
import styles from './projects.module.css'
import Sectionintroduction from './Sectionintroduction'
import smokeSensor from '../assets/smokeSensor.jpg'
import portfolioPic from '../assets/portfolioPic.png'
import soccer from '../assets/soccer.png'
import tictactoe from '../assets/tictactoe.png'
import movie from '../assets/movie.png'
import blackjack from '../assets/blackjack.png'
import phonebook from '../assets/phonebook.png'
import ImageOverlay from './ImageOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <Sectionintroduction >PROJECTS</Sectionintroduction>
        <div className={styles.sectionContent}>
          <ImageOverlay
            imgSrc={smokeSensor}
            title={"Smoke Detector Alarm"}
            github={"https://github.com/GurpartapG/Smoke-Detector-Alarm"}>
            The Arduino uno board is assembled using a MQ-2 sensor which helps in detecting gas leakage and alerts by producing a siren sound
            <br></br><br></br>
            C++
          </ImageOverlay>
          <ImageOverlay
            imgSrc={portfolioPic}
            title={"Portfolio Site"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            The current website which serves as my personal portfolio desgned to exhibit my projects and skills
            <br></br><br></br>
            Javascript &nbsp;&nbsp;&nbsp;  CSS &nbsp;&nbsp;&nbsp;  HTML&nbsp;&nbsp;&nbsp; REACT
          </ImageOverlay>
          <ImageOverlay
            imgSrc={soccer}
            title={"Soccer Knockout"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            A software developed to randomly generate a football match between eight teams that qualifies them for a hierarchy of levels
            <br></br><br></br>
            C#
          </ImageOverlay>
          <ImageOverlay
            imgSrc={tictactoe}
            title={"Tic Tac Toe"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            An emulation of tic-tac-toe
            <br></br><br></br>
            Python 
          </ImageOverlay>
          <ImageOverlay
            imgSrc={blackjack}
            title={"Black Jack"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            A game modelling the example of a casino banked game
            <br></br><br></br>
            Python 
          </ImageOverlay>
          <ImageOverlay
            imgSrc={movie}
            title={"Box-Office"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            A preliminary system imitating the box office programmed for selling movie tickets to general public
            <br></br><br></br>
            C# &nbsp;&nbsp;&nbsp;  ASP
          </ImageOverlay>
          <ImageOverlay
            imgSrc={phonebook}
            title={"Phone-Book"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            Telephone directory built to add new contacts and modify as per requirement
            <br></br><br></br>
            C
          </ImageOverlay>
        </div>
      </div>
    </section>
  )
}
