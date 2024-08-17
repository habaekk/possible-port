"use client";

import React from 'react';
import projects from '../data/projects';
import MoonShapeWidget from '../../components/projects/MoonShapeWidget';
import WateringWidget from '../../components/projects/WateringWidget';
import CatSama from '../../components/projects/CatSama';
import Portfolio from '../../components/projects/Portfolio';
import DefaultProject from '../../components/projects/DefaultProject';

interface ProjectDetailPageProps {
  params: {
    projectName: string;
  };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
  const projectTitle = params.projectName;
  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, '-') === projectTitle
  );

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  switch (project.title) {
    case 'Moon Shape Widget':
      return <MoonShapeWidget project={project} />;
    case 'Watering Widget':
      return <WateringWidget project={project} />;
    case 'CatSAMA':
      return <CatSama project={project} />;
    case 'Impossible Possibility Portfolio':
      return <Portfolio project={project} />;
    default:
      return <DefaultProject project={project} />;
  }
};

export default ProjectDetailPage;
