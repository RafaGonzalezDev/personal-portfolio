import styles from '@/styles/Home.module.css';
import profileImage from '@/assets/rafa.png';
import { PROFESSIONAL_SUMMARY } from '@/constants';
import { parseHighlight } from '@/utils';

/**
 * Home - Sección de presentación principal
 * 
 * Componente que renderiza la sección hero del portfolio con información personal,
 * descripción profesional y foto de perfil. Es la primera sección visible.
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 * 
 * @features
 * - Presentación personal con nombre y título
 * - Descripción profesional destacando habilidades clave
 * - Imagen de perfil optimizada
 * - Layout responsive de dos columnas
 * - Texto con énfasis en palabras clave
 */
const Home = () => {
  return (
    <div className={`${styles.container}`} id="home">
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>{PROFESSIONAL_SUMMARY.name}</h1>
        <h2 className={styles.subtitle}>{PROFESSIONAL_SUMMARY.title}</h2>
        <p className={styles.description}>
          {parseHighlight(PROFESSIONAL_SUMMARY.description)}
        </p>
        <p className={styles.description}>
          I enjoy turning <strong>complex ideas</strong> into <strong>elegant user experiences</strong> using <strong>modern technologies</strong> and a <strong>pragmatic</strong> approach to
          development.
        </p>
      </div>
      <div className={styles.rightContainer}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </div>
    </div>
  );
};

export default Home;
