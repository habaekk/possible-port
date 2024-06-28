import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="projects-grid">
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 1"
        description="Description of project 1"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 2"
        description="Description of project 2"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 3"
        description="Description of project 3"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 4"
        description="Description of project 4"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 5"
        description="Description of project 5"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Project 6"
        description="Description of project 6"
      />
    </div>
  </section>
);

export default Projects;
