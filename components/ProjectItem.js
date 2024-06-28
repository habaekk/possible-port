import React from 'react';
import Image from 'next/image';
import './ProjectItem.css';

const ProjectItem = ({ image, title, description }) => (
  <div className="project-item">
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

export default ProjectItem;
