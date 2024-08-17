import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section mt-6">
    <h2 className="text-2xl font-bold mb-5">Projects</h2>
    <div className="projects-grid">
      <ProjectItem
        image="/images/moonShape.webp"
        title="Moon Shape Widget"
        description="IOS Application"
      />
      <ProjectItem
        image="/images/Watering.webp"
        title="Watering Widget"
        description="Android Application"
      />
      <ProjectItem
        image="/images/drive.webp"
        title="Impossible Possibility Portfolio"
        description="Next.JS Web Application"
      />
      <ProjectItem
        image="/images/catSAMA.webp"
        title="CatSAMA"
        description="React-Native Application"
      />
      
    </div>
  </section>
);

export default Projects;
