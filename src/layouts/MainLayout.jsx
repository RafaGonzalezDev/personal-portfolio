import React from 'react';
import styles from '@/styles/MainLayout.module.css';
import Header from '@/components/Header';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <ThemeToggle />
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          © {new Date().getFullYear()} Rafa González
        </span>
      </footer>
    </div>
  );
};

export default MainLayout;
