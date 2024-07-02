import React from 'react';

const AboutMePage = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <section className="mb-8">
        <p>여기에 본인의 소개글을 작성하세요.</p>
    </section>
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">교육</h3>
      <p>여기에 교육 내용을 작성하세요.</p>
    </section>
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">경력</h3>
      <p>여기에 경력 내용을 작성하세요.</p>
    </section>
    <section className="mb-8">
      <h3 className="text-2xl font-bold mb-4">기타</h3>
      <p>여기에 기타 내용을 작성하세요.</p>
    </section>
  </div>
);

export default AboutMePage;
