// src/components/Example.js
import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import Smiley from "../assets/smiley.svg";
import "./Example.css";

export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="example-container" ref={constraintsRef}>
      <motion.div className="drag-area" />
      <motion.img 
        src={Smiley} 
        alt="Smiley face" 
        className="smiley-face" 
        drag 
        dragConstraints={constraintsRef} 
      />
      <p className="example-text"> This is some text</p>
    </div>
  );
};
