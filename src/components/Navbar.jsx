import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Navbar.module.css';
import { NAVBAR_ITEMS } from '@/constants';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(NAVBAR_ITEMS[0]?.id ?? 'home');
  const sectionRefs = useRef({});

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
      return;
    }

    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <ul className={styles.list}>
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.id} className={styles.item}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${
                  activeItem === item.id ? styles.linkActive : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
                aria-current={activeItem === item.id ? 'true' : undefined}
              >
                <span className={styles.linkLabel}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
