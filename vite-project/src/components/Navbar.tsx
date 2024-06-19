import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import logo from '../assets/logo.png';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Home</NavLink>
          <NavLink to="/company" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Empresa</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Contato</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Projetos</NavLink>
          <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
