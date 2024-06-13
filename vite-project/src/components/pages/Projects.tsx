import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../components/context/ProjectContext';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('ProjectContext must be used within a ProjectProvider');
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
            <h3>Serviços</h3>
            <ul className={styles.serviceList}>
              {project.services.map((service) => (
                <li key={service.id} className={styles.serviceItem}>
                  <p>Nome: {service.name}</p>
                  <p>Custo: R${service.cost}</p>
                </li>
              ))}
            </ul>
            <Link to={`/projects/${project.id}/add-service`} className={styles.addServiceLink}>Adicionar Serviço</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;