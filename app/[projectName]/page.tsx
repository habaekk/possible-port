"use client"

import { useParams } from 'next/navigation';
import projects from '../data/projects';

const ProjectDetailPage = (props: any) => {

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{props.params.projectName}</h1>
      {/* <p>{project.description}</p> */}
      {/* 추가적인 프로젝트 상세 정보 표시 */}
    </div>
  );
};

export default ProjectDetailPage;
