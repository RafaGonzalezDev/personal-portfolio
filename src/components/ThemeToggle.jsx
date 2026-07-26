import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from '@/styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className={styles.icon}>
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
