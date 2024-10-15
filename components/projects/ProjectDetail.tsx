import React from 'react';
import Project from '../types/Project';

const ProjectDetail: React.FC<{ project: Project }> = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p className="mb-8">{project.description}</p>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">개발계기</h2>
      <p>{project.motivation}</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">기능설명</h2>
      <p>{project.features}</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">문제해결</h2>
      <p>{project.problemSolving}</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">성과 및 배운점</h2>
      <p>{project.achievements}</p>
    </section>
  </div>
);

export default ProjectDetail;
