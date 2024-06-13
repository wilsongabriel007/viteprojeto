import React, { useState, useContext } from 'react';
import { ProjectContext } from '../../components/context/ProjectContext';
import styles from '../styles/NewProject.module.css';


const NewProject: React.FC = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error('ProjectContext must be used within a ProjectProvider');
  }

  const { addProject } = projectContext;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      name,
      description,
      budget,
      services: [],
    };
    addProject(newProject);
    setName('');
    setDescription('');
    setBudget(0);
  };

  return (
    <div className={styles.newProject}>
      <h1>Criar Novo Projeto</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome do Projeto:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="budget">Orçamento:</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Criar Projeto</button>
      </form>
    </div>
  );
};

export default NewProject;