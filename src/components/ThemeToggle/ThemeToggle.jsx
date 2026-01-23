import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

/**
 * ThemeToggle component for switching between light and dark themes
 * @returns {JSX.Element} Theme toggle button component
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Determine button labels and icons based on current theme
  const isDarkMode = theme === 'dark';
  const buttonLabel = isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
  const buttonTitle = isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro';
  
  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={buttonLabel}
      role="button"
      title={buttonTitle}
    >
      {isDarkMode ? (
        // Sun icon for dark mode (switch to light)
        <svg 
          className={styles.icon} 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </g>
        </svg>
      ) : (
        // Moon icon for light mode (switch to dark)
        <svg 
          className={styles.icon} 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
            fill="currentColor" 
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;