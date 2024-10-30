// src/App.js
import React, { useState } from "react";
import "./App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { Example } from "./components/Example";
import { Navbar } from "./components/Navbar";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
}