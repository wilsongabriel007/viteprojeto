import React from 'react';
import styles from '../styles/Home.module.css';
import savings from '../../assets/savings.svg';


const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bem-vindo ao <span className={styles.span}>Cost box!</span></h1>
      <p className={styles.p1}>Comece a gerenciar agora mesmo!</p>
      <a className={styles.link} href='/'>Criar Projeto</a>
      <img className={styles.savings} src={savings} alt="Home"/>

      
    </div>
  );
};

export default Home;
