import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDarkInitial = !(savedTheme === 'light' || (!savedTheme && !prefersDark));
      
      // Apply class immediately to prevent FOUC
      document.documentElement.classList.toggle('light-theme', !isDarkInitial);
      return isDarkInitial;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('light-theme', !newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Sun size={24} className={styles.icon} aria-hidden="true" />
      ) : (
        <Moon size={24} className={styles.icon} aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
