import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { NAVBAR_ITEMS } from '../constants';

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

  const handleClick = (id) => {
    setActiveItem(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
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
