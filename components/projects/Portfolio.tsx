import React from 'react';
import Project from '../types/Project';

const Portfolio: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <section className="mb-8">
        <p>{project.description}</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p>Overview</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <p>Problem Solving Details</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <p>Achievements</p>
    </section>

    {/* Additional details about the Portfolio */}
  </div>
);

export default Portfolio;
