import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/SkillsAndCertificates";
import About from "./components/Aboutme";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      {/* Top navigation bar */}
      <Navbar/>
      {/* <Header /> */}

      

      <main>

        {/* Hero / Landing Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Work Experience Section */}
        <section id="work-experience">
          <WorkExperience />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* About Me Section */}
        <section id="about">
          <About />
        </section>

        {/* Education Section */}
        <section id="education">
          <Education />
        </section>

      </main>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}

export default App;
