import React, { useState } from 'react';
import styles from '../styles/Page.module.css';

const NewProject: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = { id: Date.now(), title, description };

    const storedProjects = localStorage.getItem('projects');
    const projects = storedProjects ? JSON.parse(storedProjects) : [];
    projects.push(newProject);

    localStorage.setItem('projects', JSON.stringify(projects));
    alert(`Projeto criado: ${title}, ${description}`);
    setTitle('');
    setDescription('');
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Novo Projeto</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>Criar Projeto</button>
      </form>
    </div>
  );
};

export default NewProject;
