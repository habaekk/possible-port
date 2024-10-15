"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './ProjectItem.css';

const ProjectItem = ({ id, image, title, description }) => {
  const router = useRouter();

  const handleClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${slug}`);
  };

  return (
    <div className="project-item" onClick={handleClick}>
      <div className="project-image">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="project-image-inner"
        />
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
