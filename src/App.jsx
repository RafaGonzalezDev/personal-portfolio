import { useEffect } from 'react';
import styles from '@/App.module.css';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/sections/Home';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <div className={styles.container}>
          <main className={styles.main}>
            <Home />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
