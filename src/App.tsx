import React from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import BeyondWork from './components/BeyondWork/BeyondWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="snap-start">
        <Header />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Experience />
      </div>
      <div className="snap-start">
        <Skills />
      </div>
      <div className="snap-start">
        <BeyondWork />
      </div>
      <div id="contact" className="snap-start">
        <Contact />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}

export default App;