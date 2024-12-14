// src/components/Projects.js
import React from "react";
import "./Projects.css";

// Import local image
import project1 from "../assets/project1.png";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">WORK</h2>
      <div className="projects-grid">
        <div className="project-card">
          {/* Use imported image */}
          <img
            src={project1}
            alt="Project 1"
            className="project-image"
          />
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-card">
          <img
            src="https://via.placeholder.com/200x100"
            alt="Project 2"
            className="project-image"
          />
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
        </div>
        <div className="project-card">
          <img
            src="https://via.placeholder.com/200x100"
            alt="Project 3"
            className="project-image"
          />
          <h3>Project 3</h3>
          <p>A brief description of the project.</p>
        </div>
      </div>
    </div>
  );
};