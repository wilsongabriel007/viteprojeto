import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importe a imagem
import styles from '../components/styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        <img src={logo} alt="Logo" className={styles.logo} /> {}
      </NavLink>
      <NavLink to="/company" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Empresa</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Contato</NavLink>
      <NavLink to="/newproject" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Novo Projeto</NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Meus Projetos</NavLink>
    </nav>
  );
};

export default Navbar;
