// src/components/Example.js
import React, { useRef } from "react";
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
    </div>
  );
};