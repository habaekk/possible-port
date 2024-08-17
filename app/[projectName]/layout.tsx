import React, { ReactNode } from 'react';

interface ProjectsLayoutProps {
  children: ReactNode;
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default ProjectsLayout;
