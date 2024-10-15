'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ProjectItem = ({ image, title, description } : {image: string, title: string, description: string}) => {
  const router = useRouter();

  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${slug}`);
  };

  return (
    <div
      className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 transform hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6 text-white transition-all duration-300 hover:bg-opacity-20">
        <h3 className="text-2xl font-bold">{title}</h3> {/* 타이틀 크기 키움 */}
        <p className="text-m text-center mb-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
