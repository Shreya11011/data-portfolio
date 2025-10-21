import React from 'react';
import VerticalNav from './components/VerticalNav';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <VerticalNav />
      <Hero />
      <AboutMe />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Education />
      <Footer />
    </div>
  );
};

export default App;