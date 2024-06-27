import React from 'react';

const About = () => (
  <section id="about" className="p-8">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p>Bachelor of Computer Science Student at SeoulTech</p>
    <p>Email: haback1493@gmail.com</p>
    <p>Github: <a href="https://github.com/habaekk" target="_blank" rel="noopener noreferrer">https://github.com/habaekk</a></p>

    <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
    <p><strong>Seoul National University of Science and Technology</strong></p>
    <p>Bachelor of Computer Science GPA: 3.93 / 4.5</p>

    <h2 className="text-2xl font-bold mt-8 mb-4">Certifications & Qualifications</h2>
    <ul className="list-disc list-inside">
      <li>TOEIC - 930/990</li>
      <li>TOEIC Speaking - 170 (AL)</li>
      <li>SQLD</li>
    </ul>
  </section>
);

export default About;
