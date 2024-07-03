import React from 'react';

const MoonShapeWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p>{project.description} 111</p>
    {/* Moon Shape Widget에 대한 추가 내용 */}
  </div>
);

export default MoonShapeWidget;
