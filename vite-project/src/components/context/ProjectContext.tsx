import React, { createContext, useState, ReactNode } from 'react';

interface Service {
  id: number;
  name: string;
  cost: number;
}

interface Project {
  id: number;
  name: string;
  description: string;
  budget: number;
  remainingBudget: number;
  services: Service[];
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  removeProject: (projectId: number) => void;
  addService: (projectId: number, service: Service) => boolean;
  removeService: (projectId: number, serviceId: number) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, { ...project, remainingBudget: project.budget, services: [] }]);
  };

  const removeProject = (projectId: number) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  const addService = (projectId: number, service: Service): boolean => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        const totalCost = project.services.reduce((acc, svc) => acc + svc.cost, 0) + service.cost;
        if (totalCost > project.budget) {
          return project;
        }
        return { 
          ...project, 
          services: [...project.services, service], 
          remainingBudget: project.budget - totalCost 
        };
      }
      return project;
    });

    if (updatedProjects === projects) {
      return false;
    }

    setProjects(updatedProjects);
    return true;
  };

  const removeService = (projectId: number, serviceId: number) => {
    setProjects(
      projects.map(project => {
        if (project.id === projectId) {
          const updatedServices = project.services.filter(service => service.id !== serviceId);
          const totalCost = updatedServices.reduce((acc, svc) => acc + svc.cost, 0);
          return { 
            ...project, 
            services: updatedServices, 
            remainingBudget: project.budget - totalCost 
          };
        }
        return project;
      })
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, removeProject, addService, removeService }}>
      {children}
    </ProjectContext.Provider>
  );
};
