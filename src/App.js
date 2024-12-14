import React from "react";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Example } from "./components/Example"; // "Hello, I'm Anna" Section
import { Projects } from "./components/Projects"; // Projects Section
import { Navbar } from "./components/Navbar"; // Navbar Component
import { HighlightedText } from "./components/HighlightedText"; // Highlighted Text Section

export default function App() {
  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Main Sections */}
      <section className="section example-container">
        <Example />
      </section>

      <section className="section highlighted-text-container">
        <HighlightedText />
      </section>

      <section className="section projects-container">
        <Projects />
      </section>
    </div>
  );
}