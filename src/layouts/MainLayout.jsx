import React, { useEffect } from "react";
import styles from "@/styles/MainLayout.module.css";
import Header from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

import AOS from "aos";
import "aos/dist/aos.css";

/**
 * MainLayout - Layout principal de la aplicación
 * 
 * Componente que envuelve toda la aplicación proporcionando la estructura base.
 * Incluye el header con navegación, inicializa las animaciones AOS y renderiza el footer.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Contenido a renderizar dentro del layout
 * 
 * @example
 * return (
 *   <MainLayout>
 *     <HomePage />
 *   </MainLayout>
 * )
 * 
 * @features
 * - Inicialización automática de animaciones AOS
 * - Header con navegación integrada
 * - Footer con información de copyright
 * - Estructura responsive
 */
const MainLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Header />
      {children}
      <ThemeToggle />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <p className={styles.footerTagline}>
              Empowering ideas through technology
            </p>
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} - Rafa González
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
