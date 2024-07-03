import React from 'react';

const WateringWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <section className="mb-8">
        <p>{project.description}</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">개요</h2>
      <p>개요</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">문제 해결</h2>
      <p>문제 해결 내용</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">성과</h2>
      <p>성과</p>
    </section>

    {/* Watering Widget에 대한 추가 내용 */}
  </div>
);

export default WateringWidget;
