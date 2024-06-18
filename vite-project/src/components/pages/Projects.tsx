import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../components/context/ProjectContext';
import styles from '../styles/Projects.module.css';

const Projects: React.FC = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('ProjectContext must be used within a ProjectProvider');
  }

  const { projects, removeProject, removeService } = projectContext;

  return (
    <div className={styles.projects}>
      <h1>Meus Projetos</h1>
      {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Orçamento: R$ {project.budget.toFixed(2)}</p>
          <p>Orçamento Restante: R$ {project.remainingBudget.toFixed(2)}</p>
          <Link to={`/addservice/${project.id}`} className={styles.addServiceButton}>
            Adicionar Serviço
          </Link>
          <button
            className={styles.deleteButton}
            onClick={() => removeProject(project.id)}
          >
            Excluir Projeto
          </button>

          <h3>Serviços</h3>
          <ul className={styles.serviceList}>
            {project.services.map((service) => (
              <li key={service.id} className={styles.serviceItem}>
                {service.name} - R$ {service.cost.toFixed(2)}
                <button
                  className={styles.deleteButton}
                  onClick={() => removeService(project.id, service.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;