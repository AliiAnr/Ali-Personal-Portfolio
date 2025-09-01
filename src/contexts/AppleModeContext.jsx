import React, { createContext, useContext, useState, useEffect } from 'react';

const AppleModeContext = createContext();

export const useAppleMode = () => {
  const context = useContext(AppleModeContext);
  if (!context) {
    throw new Error('useAppleMode must be used within an AppleModeProvider');
  }
  return context;
};

export const AppleModeProvider = ({ children }) => {
  const [isAppleMode, setIsAppleMode] = useState(() => {
    return localStorage.getItem('appleMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('appleMode', isAppleMode.toString());
    
    // Ketika Apple mode aktif atau tidak aktif, paksa dark mode
    const root = document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, [isAppleMode]);

  const toggleAppleMode = () => {
    setIsAppleMode(prev => !prev);
  };

  return (
    <AppleModeContext.Provider value={{ isAppleMode, toggleAppleMode }}>
      {children}
    </AppleModeContext.Provider>
  );
};