import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Smiley from "../assets/smiley.svg";
import "./Example.css";

export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="example-container">
      {/* Smiley Section */}
      <div className="smiley-container" ref={constraintsRef}>
        <motion.img 
          src={Smiley} 
          alt="Smiley face" 
          className="smiley-face" 
          drag 
          dragConstraints={constraintsRef} 
        />
      </div>

      {/* Text Section */}
      <div className="text-container">
        <p className="example-text">Hello, I'm</p>
        <h1 className="example-text">ANNA</h1>
        <p className="example-subtitle">A passionate learner in tech!</p>
      </div>
    </div>
  );
};