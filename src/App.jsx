import { useEffect } from 'react';
import styles from '@/App.module.css';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/sections/Home';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import TechStack from '@/sections/TechStack';
import Contact from '@/sections/Contact';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Home />
          <Experience />
          <Projects />
          <TechStack />
          <Contact />
        </main>
      </div>
    </MainLayout>
  );
}

export default App;
