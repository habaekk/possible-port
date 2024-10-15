import React from 'react';
import Image from 'next/image';

const HomeImage = () => (
  <div className="relative w-screen h-[950px] overflow-hidden">
    <Image
      src="/images/main_green.webp"
      alt="Home Image"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-green-800 bg-opacity-70 p-12 rounded-lg max-w-lg text-center text-white">
        <div className="relative">
          <span className="absolute -top-5 -left-7 text-5xl font-bold text-white opacity-80">“</span>
          <p className="text-2xl font-bold">Web & Mobile</p>
          <span className="absolute -bottom-0 -right-7 text-5xl font-bold text-white opacity-80">”</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomeImage;
