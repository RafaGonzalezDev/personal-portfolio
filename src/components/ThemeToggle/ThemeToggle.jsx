import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const label = isDarkMode ? 'light' : 'dark';

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${label} mode`}
      title={`Switch to ${label} mode`}
    >
      <span className={styles.indicator} aria-hidden="true">
        {isDarkMode ? '●' : '○'}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default ThemeToggle;
