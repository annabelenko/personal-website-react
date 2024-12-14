// src/components/Projects.js
import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">WORK</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </div>
  );
};