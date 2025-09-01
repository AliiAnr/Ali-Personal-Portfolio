import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './Icons';
import { useAppleMode } from '../contexts/AppleModeContext';

const ThemeToggle = () => {
  const { isAppleMode } = useAppleMode();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Jika Apple mode aktif, paksa dark mode
    if (isAppleMode) {
      const root = document.documentElement;
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      // Update state theme agar icon sesuai
      setTheme('dark');
      return;
    }

    // Normal theme logic
    const applyTheme = (newTheme) => {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };

    applyTheme(theme);
  }, [theme, isAppleMode]);

  // Tambahkan effect untuk sinkronisasi ketika keluar dari Apple mode
  useEffect(() => {
    if (!isAppleMode) {
      // Ambil theme dari localStorage dan pastikan state sinkron
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
    }
  }, [isAppleMode]);

  const toggleTheme = () => {
    if (isAppleMode) return; // Prevent theme toggle in Apple mode
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Jangan render theme toggle saat Apple mode
  if (isAppleMode) {
    return null;
  }

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