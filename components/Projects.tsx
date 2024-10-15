import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => (
  <section id="projects" className="mt-6 p-6">
    <h2 className="text-2xl font-bold mb-5">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectItem
        image="/images/moonShape.webp"
        title="Moon Shape Widget"
        description="iOS Application"
      />
      <ProjectItem
        image="/images/watering.webp"
        title="Watering Widget"
        description="Android Application"
      />
      <ProjectItem
        image="/images/drive.webp"
        title="Impossible Possibility Portfolio"
        description="Next.js Web Application"
      />
      <ProjectItem
        image="/images/catSAMA.webp"
        title="CatSAMA"
        description="React Native Application"
      />
    </div>
  </section>
);

export default Projects;
