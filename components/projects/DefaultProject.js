import React from 'react';

const DefaultProject = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <p className="mb-8">{project.description}</p>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">개발계기</h2>
      <p>여기에 개발 계기에 대한 내용을 작성하세요.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">기능설명</h2>
      <p>여기에 기능 설명에 대한 내용을 작성하세요.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">문제해결</h2>
      <p>여기에 문제 해결에 대한 내용을 작성하세요.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">성과 및 배운점</h2>
      <p>여기에 성과 및 배운 점에 대한 내용을 작성하세요.</p>
    </section>
  </div>
);

export default DefaultProject;
