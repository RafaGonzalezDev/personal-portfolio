import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Navbar.module.css';
import { NAVBAR_ITEMS } from '@/constants';

/**
 * Navbar - Componente de navegación principal
 * 
 * Renderiza una barra de navegación horizontal con enlaces a las diferentes secciones
 * del portfolio. Incluye funcionalidad de scroll suave y estado activo.
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 * 
 * @features
 * - Navegación suave entre secciones
 * - Estado activo visual del enlace actual
 * - Animación AOS al cargar
 * - Responsive design
 */
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const sectionRefs = useRef({});
  
  // Inicializar refs
  useEffect(() => {
    NAVBAR_ITEMS.forEach((item) => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });
  }, []);

  useEffect(() => {
    const sectionElements = NAVBAR_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      const viewportPoint = window.innerHeight * 0.35;
       let nextActiveId = null;
       let found = false;

       sectionElements.forEach((section) => {
         const rect = section.getBoundingClientRect();
         if (rect.top <= viewportPoint && rect.bottom >= viewportPoint) {
           nextActiveId = section.id;
           found = true;
         }
       });

       if (!found) {
         const lastSection = sectionElements[sectionElements.length - 1];
         if (lastSection) {
           const lastRect = lastSection.getBoundingClientRect();
           if (lastRect.top <= viewportPoint) {
             nextActiveId = lastSection.id;
           }
         }
       }



      if (window.scrollY <= 0) {
        nextActiveId = sectionElements[0].id;
      }

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 50) {
        nextActiveId = sectionElements[sectionElements.length - 1].id;
      }

       if (nextActiveId !== null) {
         setActiveItem((prev) => (prev === nextActiveId ? prev : nextActiveId));
       }
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleClick = (id) => {
    setActiveItem(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = sectionRefs.current[id];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <div data-aos="fade-in" data-aos-delay="100" className={styles.navbar}>
      <ul className={styles.unorderedList}>
        {NAVBAR_ITEMS.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <a
              href={`#${item.id}`}
              className={`${styles.navLink} ${activeItem === item.id ? styles.activeLink : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
                handleClick(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
