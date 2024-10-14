import React from 'react';
import Image from 'next/image';
import './HomeImage.css';

const HomeImage = () => (
  <div className="home-image-container">
    <Image
      src="/images/main_green.webp" // 이미지 경로 설정
      alt="Home Image"
      layout="fill" // 이미지가 컨테이너를 꽉 채우도록 설정
      objectFit="cover" // 이미지 비율 유지하며 꽉 채우기
    />
    <div className="quote-box">
      <div className="quote">
        <span className="quote-mark left-quote">“</span>
        <p className="quote-text">not because they are easy, but because they are hard - Kennedy </p>
        <span className="quote-mark right-quote">”</span>
      </div>
    </div>
  </div>
);

export default HomeImage;
