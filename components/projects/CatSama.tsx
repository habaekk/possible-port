import React from 'react';

import Project from '../types/Project';

const CatSama: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <section className="mb-8">
      <p>{project.description}</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p>{project.motivation}</p> {/* You can use project.motivation */}
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Problem Solving</h2>
      <p>{project.problemSolving}</p> {/* Use project.problemSolving */}
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <p>{project.achievements}</p> {/* Use project.achievements */}
    </section>

    {/* Additional details about CatSama */}
  </div>
);

export default CatSama;
