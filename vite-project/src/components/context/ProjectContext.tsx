import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from '../../../src/LocalStorage';

interface Project {
  id: number;
  name: string;
  description: string;
  budget: number;
  remainingBudget: number;
  services: any[];
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (projectId: number) => void;
  removeService: (projectId: number, serviceId: number) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const loggedInUser = localStorage.getItem('loggedInUser');

  useEffect(() => {
    if (loggedInUser) {
      const savedProjects = loadFromLocalStorage(`projects_${loggedInUser}`);
      if (savedProjects) {
        setProjects(savedProjects);
      }
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser) {
      saveToLocalStorage(`projects_${loggedInUser}`, projects);
    }
  }, [projects, loggedInUser]);

  const addProject = (project: Project) => {
    setProjects(prevProjects => [...prevProjects, project]);
  };

  const removeProject = (projectId: number) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
  };

  const removeService = (projectId: number, serviceId: number) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId
          ? {
              ...project,
              services: project.services.filter(service => service.id !== serviceId),
              remainingBudget: project.remainingBudget + project.services.find(service => service.id === serviceId)!.cost,
            }
          : project
      )
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, removeProject, removeService }}>
      {children}
    </ProjectContext.Provider>
  );
};
