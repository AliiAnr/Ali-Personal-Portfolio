/* filepath: src/components/ThemeToggle.jsx */
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize dengan value dari localStorage atau default
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const applyTheme = (newTheme) => {
      const root = document.documentElement;
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark');
      
      // Add new theme class
      root.classList.add(newTheme);
      
      // Set data attribute
      root.setAttribute('data-theme', newTheme);
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
    };

    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 focus-ring rounded-full text-text hover:bg-primary/10 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;