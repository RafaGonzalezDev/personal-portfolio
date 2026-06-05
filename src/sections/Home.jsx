import styles from '@/styles/Home.module.css';
import { PROFESSIONAL_SUMMARY, EXPERIENCES } from '@/constants';
import { parseHighlight } from '@/utils';

const Home = () => {
  const currentExperience = EXPERIENCES.find((experience) => experience.isCurrent);
  const nameParts = PROFESSIONAL_SUMMARY.name.split(' ');

  return (
    <section className={styles.section} id="home">
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowPrompt}>$</span>
          <span>whoami</span>
        </p>

        <h1 className={styles.name}>
          {nameParts.map((part, index) => (
            <span key={part} className={styles.nameLine}>
              {part}
              {index < nameParts.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>
      </div>

      <div className={styles.body}>
        <div className={styles.roleLine}>
          <span className={styles.roleLabel}>
            {PROFESSIONAL_SUMMARY.title}
          </span>
          <span className={styles.roleDivider} aria-hidden="true">
            /
          </span>
          <span className={styles.roleFocus}>AI Developer Tooling</span>
        </div>

        <p className={styles.lead}>
          {parseHighlight(PROFESSIONAL_SUMMARY.description)}
        </p>

        {currentExperience ? (
          <div className={styles.status}>
            <span className="status-dot" aria-hidden="true" />
            <span className={styles.statusText}>
              Currently {currentExperience.role.toLowerCase()} at{' '}
              <span className={styles.statusCompany}>
                {currentExperience.company}
              </span>
            </span>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Home;
