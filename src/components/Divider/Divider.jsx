import styles from './Divider.module.css';

/**
 * Divider - Separador visual horizontal
 *
 * Renderiza un <hr> estilizado con un border-top fino que puede
 * colocarse de forma aislada entre secciones o tarjetas.
 *
 * @component
 * @example
 * return (
 *   <Divider />
 * )
 */
const Divider = () => {
  return <hr className={styles.divider} />;
};

export default Divider;
