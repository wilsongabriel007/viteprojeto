import React from 'react';
import styles from '../styles/Page.module.css';

const Company: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Sobre a Empresa</h1>
      <p className={styles.content}>
        Nossa empresa é líder em inovação e tecnologia. Trabalhamos para oferecer as melhores soluções aos nossos clientes.
      </p>
    </div>
  );
};

export default Company;
