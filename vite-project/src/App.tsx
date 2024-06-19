import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Footer from './components/pages/Footer';
import styles from './components/styles/App.module.css';
import { ProjectProvider } from './components/context/ProjectContext';
import AddService from './components/pages/AddService';

function App() {
  return (
    <Router>
      <ProjectProvider>
        <div className={styles.app}>
          <Navbar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newproject" element={<NewProject />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/addservice/:projectId" element={<AddService />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ProjectProvider>
    </Router>
  );
}

export default App;