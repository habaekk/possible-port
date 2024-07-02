import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section mt-6">
    <h2 className="text-2xl font-bold mb-5">프로젝트</h2>
    <div className="projects-grid">
      <ProjectItem
        id={1}
        image="/images/moonShape3.png"
        title="Moon Shape Widget"
        description="IOS Application"
      />
      <ProjectItem
        id={2}
        image="/images/Watering3.png"
        title="Watering Widget"
        description="Android Application"
      />
      <ProjectItem
        id={3}
        image="/images/CatSAMA1.webp"
        title="CatSAMA"
        description="React-Native Application"
      />
      <ProjectItem
        id={4}
        image="/images/drive1.webp"
        title="Impossible Possibility Portfolio"
        description="Next.JS Web Application"
      />
    </div>
  </section>
);

export default Projects;
