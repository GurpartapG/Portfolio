/*import logo from './logo.svg';
import './App.css';*/

import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import SkillsAndCertificates from "./components/SkillsAndCertificates";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <Aboutme />
        <Education />
        <SkillsAndCertificates />
        <WorkExperience />
        <Project />
      </main>
      <Footer />
    </div>

  );
}

export default App;
