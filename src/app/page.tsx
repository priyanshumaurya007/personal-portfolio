import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import SystemDesign from '../components/SystemDesign';
import Expertise from '../components/Expertise';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Projects />
        <SystemDesign />
        <Expertise />
        <Education />
        <Contact />
      </main>
    </>
  );
}
