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
      <Navbar /> {/* Add Navbar Component */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="example-container">
        <Example key={count} />
      </div>
    </>
  );
}