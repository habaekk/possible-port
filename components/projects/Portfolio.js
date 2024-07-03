import React from 'react';

const Portfolio = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p>{project.description} 444</p>
    {/* Portfolio 에 대한 추가 내용 */}
  </div>
);

export default Portfolio;
