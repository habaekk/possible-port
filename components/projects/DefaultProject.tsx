import React from 'react';

const DefaultProject = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p>{project.description}</p>
    {/* 기본 프로젝트에 대한 추가 내용 */}
  </div>
);

export default DefaultProject;
