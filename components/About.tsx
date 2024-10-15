import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="p-6">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/3">
          <Image
            src="/images/me5.jpg"
            alt="Profile Image of Bak Habaek"
            width={300}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
          <h3 className="text-xl font-bold">Bak Habaek</h3>
          <p className="font-bold">Front-End Developer with a passion for mobile development</p>

          <br />
          <h3 className="text-xl font-bold mb-1">Education</h3>
          <p><strong>Seoul National University of Science and Technology</strong></p>
          <p><strong>(Bachelor&apos;s degree)</strong></p>
          <p>ITM → Computer Science [ 3.93 / 4.5 ]</p>

          <br />
          <p><strong>Udemy (Online Education)</strong></p>
          <p>iOS &amp; Swift - The Complete iOS App Development Bootcamp</p>

          <br />
          <h3 className="text-xl font-bold mb-1">Qualifications</h3>
          <ul className="list-disc list-inside">
            <li>TOEIC - 930/990</li>
            <li>TOEIC Speaking - 170 (AL)</li>
            <li>Engineer Information Processing</li>
            <li>SQLD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

// 아이패드에서는 여전히 사진 사이즈와 텍스트 콘텐트의 높이가 안 맞음