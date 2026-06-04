import styles from '@/styles/Home.module.css';
import { PROFESSIONAL_SUMMARY } from '@/constants';
import { parseHighlight } from '@/utils';

const Home = () => {
  return (
    <section className={styles.section} id="home">
      <p className={styles.eyebrow}>
        <span className={styles.eyebrowPrompt}>$</span> whoami
      </p>
      <h1 className={styles.name}>{PROFESSIONAL_SUMMARY.name}</h1>
      <p className={styles.role}>
        <span className={styles.roleLabel}>{PROFESSIONAL_SUMMARY.title}</span>
        <span className={styles.roleDivider}>·</span>
        <span className={styles.roleFocus}>AI Developer Tooling</span>
      </p>
      <div className={styles.bio}>
        <p className={styles.lead}>
          {parseHighlight(PROFESSIONAL_SUMMARY.description)}
        </p>
      </div>
    </section>
  );
};

export default Home;
