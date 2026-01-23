import { useEffect } from 'react';
import styles from '@/App.module.css';

// Importaciones organizadas por tipo
// Layouts
import MainLayout from '@/layouts/MainLayout';

// Páginas/Secciones
import Home from '@/sections/Home';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

// Componentes
import Separator from '@/components/Separator';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className={styles.appContainer}>
        <main className={styles.mainContent}>
          <div data-aos="fade-up" data-aos-delay="100">
            <Home />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <Separator />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Experience />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Separator />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Projects />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Separator />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Contact />
          </div>
        </main>
      </div>
    </MainLayout>
  );
}

export default App;
