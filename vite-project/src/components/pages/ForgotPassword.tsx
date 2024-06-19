// src/components/pages/ForgotPassword.tsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/ForgotPassword.module.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleResetPassword = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: any) => user.email === email);

    if (!user) {
      setError('Email not found.');
      return;
    }

    // Simulate sending reset email
    setMessage(`A password reset link has been sent to ${email}.`);
    setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      {error && <div className={styles.error}>{error}</div>}
      {message && <div className={styles.message}>{message}</div>}
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
      <button onClick={handleResetPassword} className={styles.resetButton}>
        Reset Password
      </button>
      <p className={styles.loginLink}>
        <Link to="/login">Back to login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
