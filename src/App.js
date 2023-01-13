/*import logo from './logo.svg';
import './App.css';*/

import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";


function App() {
  return (
    <div className="app">
      <main>
        <Header/>
        <Aboutme />
        <Education />
        <Project />
      </main>
      <Footer/>
    </div>

  );
}

export default App;
