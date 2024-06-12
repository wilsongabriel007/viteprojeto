import React, { createContext, useState, ReactNode } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
  budget: number;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};