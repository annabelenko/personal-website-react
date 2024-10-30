// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <motion.div
          className={`hamburger ${isOpen ? "open" : ""}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </nav>
  );
};