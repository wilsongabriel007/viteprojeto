import React, { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Meus Projetos</h1>
      <div className={styles.projectsList}>
        {projects.length === 0 ? (
          <p className={styles.noProjects}>Nenhum projeto encontrado.</p>
        ) : (
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} className={styles.projectItem}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
