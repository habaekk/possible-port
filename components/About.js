import React from 'react';

const About = () => (
  <section id="about" className="p-8">
    <h2 className="text-2xl font-bold mb-4">내 정보</h2>
    <p className="font-bold">ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</p>
    <p className="font-bold">ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</p>
    <p>이메일: haback1493@gmail.com</p>
    <p>깃허브: <a href="https://github.com/habaekk" target="_blank" rel="noopener noreferrer">https://github.com/habaekk</a></p>

    <h2 className="text-2xl font-bold mt-8 mb-4">교육</h2>
    <p><strong>서울과학기술대학교</strong></p>
    <p>컴퓨터공학과 학사</p>
    <p>학점평균: 3.93 / 4.5</p>

    <h2 className="text-2xl font-bold mt-8 mb-4">자격증</h2>
    <ul className="list-disc list-inside">
      <li>TOEIC - 930/990</li>
      <li>TOEIC Speaking - 170 (AL)</li>
      <li>정보처리기사</li>
      <li>SQLD</li>
    </ul>
  </section>
);

export default About;
