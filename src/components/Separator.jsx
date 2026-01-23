import React from 'react';
import styles from '@/styles/Separator.module.css';

/**
 * Separator - Componente divisor visual
 *
 * Renderiza una línea horizontal decorativa para separar secciones del portfolio.
 * Proporciona espaciado visual y mejora la estructura de la página.
 *
 * @component
 * @example
 * return (
 *   <Separator />
 * )
 *
 * @features
 * - Línea horizontal estilizada
 * - Espaciado consistente
 * - Diseño minimalista
 */
const Separator = () => {
  return (
    <div className={styles.separatorContainer}>
      <div className={styles.line}></div>
    </div>
  );
};

export default Separator;
