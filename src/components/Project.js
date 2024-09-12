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
import audio from '../assets/audio_speech.png'
import ImageOverlay from './ImageOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <Sectionintroduction>PROJECTS</Sectionintroduction>
        <div className={styles.sectionContent}>

          <ImageOverlay
            imgSrc={audio}
            title={"Audio To Speech"}
            github={"https://github.com/GurpartapG/Audio-To-Speech---AssemblyAI.git"}>
            An AI-powered project that converts audio files into text using Assembly AI.
            <br></br><br></br>
            Python &nbsp;&nbsp;&nbsp; AssemblyAI
          </ImageOverlay>

          <ImageOverlay
            imgSrc={smokeSensor}
            title={"Smoke Detector Alarm"}
            github={"https://github.com/GurpartapG/Smoke-Detector-Alarm"}>
            The Arduino Uno board is assembled with an MQ-2 sensor to detect gas leaks, such as LPG, methane, and smoke. Alerts are produced by a siren sound.
            <br></br><br></br>
            C++
          </ImageOverlay>

          <ImageOverlay
            imgSrc={portfolioPic}
            title={"Portfolio Site"}
            github={"https://github.com/GurpartapG/portfolio.git"}>
            The current website serving as a personal portfolio to showcase my projects and skills. Built using React and styled using CSS.
            <br></br><br></br>
            Javascript &nbsp;&nbsp;&nbsp;  CSS &nbsp;&nbsp;&nbsp;  HTML&nbsp;&nbsp;&nbsp; REACT
          </ImageOverlay>

          <ImageOverlay
            imgSrc={soccer}
            title={"Soccer Knockout"}
            github={"https://github.com/GurpartapG/Random-Football-Match"}>
            A software developed to randomly generate a football match between eight teams, qualifying them for a hierarchy of levels in a knockout format.
            <br></br><br></br>
            C#
          </ImageOverlay>

          <ImageOverlay
            imgSrc={tictactoe}
            title={"Tic Tac Toe"}
            github={"https://github.com/GurpartapG/TikTacToe"}>
            A simple implementation of the classic Tic-Tac-Toe game using Python, showcasing basic game logic and user interaction.
            <br></br><br></br>
            Python
          </ImageOverlay>

          <ImageOverlay
            imgSrc={blackjack}
            title={"Black Jack"}
            github={"https://github.com/GurpartapG/BlackJack---Python"}>
            A game simulating the popular casino game Blackjack, allowing users to play against the house using Python.
            <br></br><br></br>
            Python
          </ImageOverlay>

          <ImageOverlay
            imgSrc={movie}
            title={"Box-Office"}
            github={"https://github.com/GurpartapG/Movie-Ticket"}>
            A basic replica of an online movie ticket purchase system with a SQL-driven database and a GUI application for ticket bookings.
            <br></br><br></br>
            C# &nbsp;&nbsp;&nbsp;  ASP
          </ImageOverlay>

          <ImageOverlay
            imgSrc={phonebook}
            title={"Phone-Book"}
            github={"https://github.com/GurpartapG/Phone-Book-Application-C"}>
            A telephone directory application built to add, update, and manage contacts, with features for modifying contact details as needed.
            <br></br><br></br>
            C
          </ImageOverlay>

        </div>
      </div>
    </section>
  )
}
