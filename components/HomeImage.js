import React from 'react';
import Image from 'next/image';
import './HomeImage.css';

const HomeImage = () => (
  <div className="home-image-container">
    <Image
      src="/images/f1.jpg" // 이미지 경로 설정
      alt="Home Image"
      layout="fill" // 이미지가 컨테이너를 꽉 채우도록 설정
      objectFit="cover" // 이미지 비율 유지하며 꽉 채우기
    />
  </div>
);

export default HomeImage;
