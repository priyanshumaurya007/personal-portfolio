import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import About from '../components/About';
import Experience from '../components/Experience';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import SystemDesign from '../components/SystemDesign';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Impact />
      <About />
      <Experience />
      <Expertise />
      <Projects />
      <SystemDesign />
      <Contact />
    </main>
  );
}
