import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ProjectDetail from './components/ProjectDetail';
import GlassSurface from './components/GlassSurface';
import GradientBlinds from './components/GradientBlinds';
import { useAppleMode } from './contexts/AppleModeContext';
import TargetCursor from './components/TargetCursor';

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
  const { isAppleMode } = useAppleMode();

  // Helper function untuk random number
  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  // Function untuk generate random gradient config
  const generateRandomGradient = () => {
    const colors = [
      ['#FF9FFC', '#5227FF'],
      ['#FFB347', '#FF6B35'],
      ['#4FACFE', '#00F2FE'],
      ['#43E97B', '#38F9D7'],
      ['#FA709A', '#FEE140'],
      ['#A8E6CF', '#FFD3A5'],
      ['#FD746C', '#FF9068'],
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
    ];

    const randomColors = colors[Math.floor(Math.random() * colors.length)];

    return {
      gradientColors: randomColors,
      angle: Math.floor(randomBetween(0, 360)),
      noise: Number(randomBetween(0, 1).toFixed(2)),
      blindCount: Math.floor(randomBetween(10, 16)),
      blindMinWidth: Math.floor(randomBetween(40, 60)),
      spotlightRadius: 0.2,
      spotlightSoftness: Number(randomBetween(0.8, 1.2).toFixed(2)),
      spotlightOpacity: Number(randomBetween(0.8, 1).toFixed(2)),
      mouseDampening: Number(randomBetween(0.1, 0.2).toFixed(3)),
      distortAmount: Number(randomBetween(5, 25).toFixed(3)),
    };
  };

  // State untuk gradient config
  const [gradientConfig, setGradientConfig] = useState(null);

  // Generate config saat Apple mode aktif
  useEffect(() => {
    if (isAppleMode) {
      setGradientConfig(generateRandomGradient());
    } else {
      setGradientConfig(null);
    }
  }, [isAppleMode]);

  // Timer untuk auto-randomize setiap 20 detik
  useEffect(() => {
    let interval;
    
    // if (isAppleMode && gradientConfig) {
    //   interval = setInterval(() => {
    //     setGradientConfig(generateRandomGradient());
    //   }, 5000); // 20 detik = 20000ms
    // }

    // Cleanup interval saat component unmount atau Apple mode off
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAppleMode, gradientConfig]);

  return (
    <div className="relative min-h-screen">

      {/* <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      /> */}

      {/* GradientBlinds Background - fixed untuk seluruh website */}
      {isAppleMode && gradientConfig && (
        <div 
          className="fixed inset-0 z-0"
          style={{ 
            width: '100vw', 
            height: '100vh',
          }}
        >
          <GradientBlinds
            gradientColors={gradientConfig.gradientColors}
            angle={gradientConfig.angle}
            noise={gradientConfig.noise}
            blindCount={gradientConfig.blindCount}
            blindMinWidth={gradientConfig.blindMinWidth}
            spotlightRadius={gradientConfig.spotlightRadius}
            spotlightSoftness={gradientConfig.spotlightSoftness}
            spotlightOpacity={gradientConfig.spotlightOpacity}
            mouseDampening={gradientConfig.mouseDampening}
            distortAmount={gradientConfig.distortAmount}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
      )}

      {/* Content dengan class conditional untuk pointer events */}
      <div 
        className={`relative z-10 ${isAppleMode ? 'apple-mode-enabled' : ''}`}
      >
        <Router>
          <SkipToContent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;