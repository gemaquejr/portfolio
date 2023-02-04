import React from "react";
import Home from "./components/home"
import Projects from "./components/projects"
import Experiences from "./components/experiences"
import SocialMedia from './components/socialMedia'
import Contact from "./components/contact"
import About from "./components/about"

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Experiences />
      <SocialMedia />
      <Contact />
      <About />
    </div>
  );
}

export default App;
