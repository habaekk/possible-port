"use client";

import { useParams } from 'next/navigation';
import projects from '../data/projects';

const ProjectDetailPage = (props: any) => {
  const projectTitle = props.params.projectName;
  const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, '-') === projectTitle);

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p>{project.description}</p>
      {/* 추가적인 프로젝트 상세 정보 표시 */}
    </div>
  );
};

export default ProjectDetailPage;
