import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import About from '../components/About';
import Projects from '../components/Projects';
import SystemDesign from '../components/SystemDesign';
import Expertise from '../components/Expertise';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Projects />
        <SystemDesign />
        <Expertise />
        <Contact />
      </main>
    </>
  );
}
