import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
    <div className="projects-grid">
      <ProjectItem
        image="/images/moonShape1.webp"
        title="Moon Shape Widget"
        description="IOS Application"
      />
      <ProjectItem
        image="/images/Watering3.png"
        title="Watering Widget"
        description="Android Application"
      />
      <ProjectItem
        image="/images/CatSAMA1.webp"
        title="CatSAMA"
        description="React-Native Application"
      />
      <ProjectItem
        image="/images/drive1.webp"
        title="Impossible Possibility Portfolio"
        description="Next.JS Web Application"
      />
      <ProjectItem
        image="/images/swingBy2.webp"
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
