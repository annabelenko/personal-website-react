import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Smiley from "../assets/smiley.svg";
import "./Example.css";

export const Example = () => {
  const constraintsRef = useRef(null);
  const GRID_SIZE = 400; // 20x20 grid (400 pixels)
  const [colors, setColors] = useState(Array(GRID_SIZE).fill("#f9f9f9"));
  const [isMobile, setIsMobile] = useState(false); // State to track screen size

  // Detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Mobile breakpoint
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial state
    mediaQuery.addEventListener("change", handleResize); // Add event listener for changes

    return () => mediaQuery.removeEventListener("change", handleResize); // Cleanup
  }, []);

  // Update pixel colors dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) =>
        prevColors.map(() => {
          const gray = Math.floor(Math.random() * 60) + 225; // Generate gray between 225-255
          return `rgb(${gray}, ${gray}, ${gray})`; // Random gray shade
        })
      );
    }, 1000); // Change colors every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="example-container">
      {/* Smiley Container with Pixelated Background */}
      <div className="smiley-container" ref={constraintsRef}>
        <div className="pixel-grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className="pixel"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
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
        <h1 className="example-text">ANNA :)</h1>
        <p className="example-subtitle">
          A passionate{" "}
          {isMobile ? (
            "designer and software engineer,"
          ) : (
            <>
              <span className="highlight highlight-yellow">designer</span> and{" "}
              <span className="highlight highlight-blue">software engineer,</span>
            </>
          )}{" "}
          bridging the gap between technology and humans.
        </p>

        {/* Resume Button */}
        <a
          href="https://example.com/resume.pdf" // Replace with your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
      </div>
    </div>
  );
};