import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import styles from '../styles/AddService.module.css';

const AddService: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('ProjectContext must be used within a ProjectProvider');
  }

  const { projects, addService, removeService } = projectContext;
  const project = projects.find((p) => p.id === Number(projectId));

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newService = {
      id: Date.now(),
      name,
      cost,
    };
    const success = addService(project.id, newService);
    if (!success) {
      setErrorMessage('O custo do serviço ultrapassa o orçamento disponível.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Serviço adicionado com sucesso!');
      setName('');
      setCost(0);
    }
  };

  return (
    <div className={styles.addService}>
      <h1>Adicionar Serviço ao Projeto: {project.name}</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome do Serviço:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="cost">Custo do Serviço:</label>
          <input
            type="number"
            id="cost"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            required
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <button type="submit" className={styles.submitButton}>Adicionar Serviço</button>
      </form>

      <h2>Serviços</h2>
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
  );
};

export default AddService;
