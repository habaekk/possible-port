"use client";

import projects from '../data/projects';
import ProjectDetail from '../../components/projects/ProjectDetail';
const ProjectDetailPage = (props) => {
  const projectTitle = props.params.projectName;
  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s+/g, '-') === projectTitle
  );

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
