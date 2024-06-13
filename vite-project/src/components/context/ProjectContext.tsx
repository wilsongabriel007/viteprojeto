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
  services: Service[];
}

interface ProjectContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  addService: (projectId: number, service: Service) => boolean;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const addService = (projectId: number, service: Service) => {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          if (project.budget < service.cost) {
            return project; // Não altera o projeto se o custo do serviço for maior que o orçamento
          }
          const updatedBudget = project.budget - service.cost;
          return {
            ...project,
            services: [...project.services, service],
            budget: updatedBudget,
          };
        }
        return project;
      });
    });

    const project = projects.find((p) => p.id === projectId);
    if (project && project.budget >= service.cost) {
      return true; // Serviço adicionado com sucesso
    }
    return false; // Falha ao adicionar serviço
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, addService }}>
      {children}
    </ProjectContext.Provider>
  );
};
