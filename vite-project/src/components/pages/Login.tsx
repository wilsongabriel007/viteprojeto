import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      onLogin();
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      {error && <div className={styles.error}>{error}</div>}
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
      <button onClick={handleLogin} className={styles.loginButton}>
        Login
      </button>
      <p className={styles.registerLink}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      <p className={styles.forgotPassword}>
        <Link to="/forgot-password">Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;