import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      className={styles.themeFab}
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
