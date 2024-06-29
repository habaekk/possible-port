import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
    <div className="projects-grid">
      <ProjectItem
        image="/images/f1.jpg"
        title="Moon Shape Widget"
        description="IOS Application"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Watering Widget"
        description="Android Application"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="CatSAMA"
        description="React-Native Application"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Impossible Possibility Portfolio"
        description="Next.JS Web Application"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="SwingBy-RL"
        description="Unity Machine Learning Program"
      />
      <ProjectItem
        image="/images/f1.jpg"
        title="Story and Draw"
        description="RenPY Visual Novel Game"
      />
    </div>
  </section>
);

export default Projects;
