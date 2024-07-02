"use client";

import projects from '../data/projects';
import MoonShapeWidget from '../../components/projects/MoonShapeWidget';
import WateringWidget from '../../components/projects/WateringWidget';
import DefaultProject from '../../components/projects/DefaultProject';

const ProjectDetailPage = (props) => {
  const projectTitle = props.params.projectName;
  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, '-') === projectTitle
  );

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  switch (project.title) {
    case 'Moon Shape Widget':
      return <MoonShapeWidget project={project} />;
    case 'Watering Widget':
      return <WateringWidget project={project} />;
    default:
      return <DefaultProject project={project} />;
  }
};

export default ProjectDetailPage;
