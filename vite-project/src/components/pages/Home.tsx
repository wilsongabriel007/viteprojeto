import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import savings from '../../assets/savings.svg';


const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Bem-vindo ao <span className={styles.span}>Cost box!</span></h1>
      <p className={styles.p1}>Comece a gerenciar agora mesmo!</p>
      <div className={styles.buttonContainer}>
        <Link to="/newproject" className={styles.button}>
          Criar Novo Projeto
        </Link>
      </div>
      <img className={styles.savings} src={savings} alt="Home"/>

      
    </div>
  );
};

export default Home;
