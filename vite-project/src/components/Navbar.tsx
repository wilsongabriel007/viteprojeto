import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../components/styles/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    
    
    <div className={styles['navbar-container']}>  
      <nav className={styles.navbar}>
        
        <img src={logo} alt="logo" className={styles.logo} />
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Home</NavLink>
        <NavLink to="/company" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Empresa</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Contato</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Projetos</NavLink>
      </nav>
      
    </div>
  );
};

export default Navbar;
