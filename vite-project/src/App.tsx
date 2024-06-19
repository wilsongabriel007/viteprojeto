import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';
import styles from './components/styles/App.module.css';
import { ProjectProvider } from './components/context/ProjectContext';
import AddService from './components/pages/AddService';
import ForgotPassword from './components/pages/ForgotPassword';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('loggedInUser');
  }

  return (
    <Router>
      <ProjectProvider>
        <div className={styles.app}>
          <Navbar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
              <Route path="/company" element={isAuthenticated ? <Company /> : <Navigate to="/login" />} />
              <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/login" />} />
              <Route path="/newproject" element={isAuthenticated ? <NewProject /> : <Navigate to="/login" />} />
              <Route path="/projects" element={isAuthenticated ? <Projects /> : <Navigate to="/login" />} />
              <Route path="/addservice/:projectId" element={isAuthenticated ? <AddService /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ProjectProvider>
    </Router>
  );
}

export default App;