import React from 'react';
import styles from '../styles/Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  customClass?: string;
}

const Container: React.FC<ContainerProps> = ({ children, customClass }) => {
  return <div className={`${styles.container} ${customClass ? styles[customClass] : ''}`}>{children}</div>;
};

export default Container;
