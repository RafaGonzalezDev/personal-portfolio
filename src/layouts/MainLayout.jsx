import React from 'react';
import styles from '@/styles/MainLayout.module.css';
import Header from '@/components/Header';

const MainLayout = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <footer className={styles.footer}>
        <span className={styles.footerText}>
          © {year} · Rafa González Rubio · Córdoba
        </span>
        <span className={styles.footerMeta}>
          Built with React
        </span>
      </footer>
    </div>
  );
};

export default MainLayout;
