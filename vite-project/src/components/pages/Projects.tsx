import React, { useContext } from 'react';
import { ProjectContext } from '../../components/context/ProjectContext';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('useContext(ProjectContext) must be used within a ProjectProvider');
  }

  const { projects } = projectContext;

  return (
    <div className={styles.projects}>
      <h1>Meus Projetos</h1>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Orçamento: R${project.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;