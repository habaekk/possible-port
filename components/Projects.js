import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="text-2xl font-bold mb-4">프로젝트</h2>
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
      <ProjectItem
        id={5}
        image="/images/swingBy2.webp"
        title="SwingBy-RL"
        description="Unity Reinforcement Learning Program"
      />
      <ProjectItem
        id={6}
        image="/images/draw1.webp"
        title="Story and Draw"
        description="RenPY Visual Novel Game"
      />
    </div>
  </section>
);

export default Projects;
