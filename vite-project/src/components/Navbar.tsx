import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './components/styles/Navbar.module.css';


const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/company">Empresa</NavLink>
      <NavLink to="/contact">Contato</NavLink>
      <NavLink to="/newproject">Novo Projeto</NavLink>
    </nav>
  );
}

export default Navbar;
