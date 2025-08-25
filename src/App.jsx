import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ProjectDetail from './components/ProjectDetail';

// Home Page Component
const HomePage = () => (
  <>
    <Header />
    <main id="main-content">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

// Project Detail Page Component  
const ProjectPage = () => (
  <>
    <Header />
    <main id="main-content">
      <ProjectDetail />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <SkipToContent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;