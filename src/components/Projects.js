// src/components/Projects.js
import React from "react";
import "./Projects.css";

// Import local images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.gif";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.gif";


export const Projects = () => {
  return (
    <div className="projects-container" id="work">
      <h2 className="projects-title">WORK</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={project1} alt="Project 1" className="project-image" />
          <div className="project-content">
            <div className="project-right">
              <h3>StormShoppr at MIT</h3>
              <p>
                A Predictive Hurricane Supply Orderer.  
                <>
                  <span className="highlight highlight-gray"><strong>React</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>TypeScript</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Next.js</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Convex</strong></span>
                </>
              </p>
            </div>
            <div className="project-left">
              <p className="project-date">September 2024</p>
              <a
                href="https://github.com/annabelenko/StormShoppr"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={project2} alt="Project 2" className="project-image" />
          <div className="project-content">
            <div className="project-right">
              <h3>Elevators & Economic Injustice at Macaulay Honors College</h3>
              <p>
                Data Analysis on MTA's Open Data.  
                <>
                  <span className="highlight highlight-gray"><strong>Python</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Jupyter Notebooks</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>ArcGIS</strong></span>
                </>
              </p>
            </div>
            <div className="project-left">
              <p className="project-date">September 2024</p>
              <a
                href="https://docs.google.com/presentation/d/1rDxRDHBnDq2daMMjFTvl9GUdJObQvst37oVPBs8A8LA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Slides
              </a>
            </div>
          </div>
        </div>

        {/* Project 4*/}
        <div className="project-card">
          <img src={project4} alt="Project 4" className="project-image" />
          <div className="project-content">
            <div className="project-right">
              <h3>Note-Taking Platform at Harvard University</h3>
              <p>
                Voice-to-Text Transcription tool for the Hard of Hearing.  
                <>
                  <span className="highlight highlight-gray"><strong>TypeScript</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Convex</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>OpenAI</strong></span>
                </>
              </p>
            </div>
            <div className="project-left">
              <p className="project-date">October 2023</p>
              <a
                href="https://github.com/annabelenko/minerva"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={project3} alt="Project 3" className="project-image" />
          <div className="project-content">
            <div className="project-right">
              <h3>Ramadan Website at McMaster University</h3>
              <p>
                Case Study of Charity Page.  
                <>
                  <span className="highlight highlight-gray"><strong>UI/UX Design</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Figma</strong></span>{" "}
                  <span className="highlight highlight-gray"><strong>Affinity Design</strong></span>

                </>
              </p>
            </div>
            <div className="project-left">
              <p className="project-date">November 2022</p>
              <a
                href="https://docs.google.com/presentation/d/1um6LvibkCZqflCI6XryFSeZymtvY_2hvxPpKHmmepk8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Slides
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};