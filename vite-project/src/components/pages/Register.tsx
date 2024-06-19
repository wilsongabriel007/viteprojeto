import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Register.module.css';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
  
    const handleRegister = () => {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
  
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some((user: any) => user.username === username || user.email === email);
  
      if (userExists) {
        setError('Username or email already taken.');
        return;
      }
  
      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    };
  
    return (
      <div className={styles.container}>
        <h2>Register</h2>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button onClick={handleRegister} className={styles.registerButton}>
          Register
        </button>
        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p className={styles.forgotPassword}>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
      </div>
    );
  };
  
  export default Register;