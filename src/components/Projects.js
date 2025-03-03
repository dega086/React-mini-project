import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Description of the project.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>Description of the project.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </section>
  );
}

export default Projects;
