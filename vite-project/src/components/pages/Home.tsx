import React from 'react';
import styles from '../styles/Page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bem-vindo à Home</h1>
      <p className={styles.content}>
        Esta é a página inicial do nosso site. Aqui você encontrará informações gerais e links úteis.
      </p>
    </div>
  );
};

export default Home;
