import styles from '@/styles/Home.module.css';
import { PROFESSIONAL_SUMMARY, EXPERIENCES } from '@/constants';
import { parseHighlight } from '@/utils';

const CORE_CAPABILITIES = [
  'Angular',
  'TypeScript',
  'Microfrontends',
  'MCP',
  'Developer Tooling',
];

const Home = () => {
  const currentExperience = EXPERIENCES.find((experience) => experience.isCurrent);

  return (
    <section className={styles.section} id="home">
      <div className={styles.head}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowPrompt}>$</span>
          <span>whoami</span>
        </p>

        <div className={styles.identity}>
          <img
            className={styles.profilePhoto}
            src="/profile-picture.jpg"
            alt={PROFESSIONAL_SUMMARY.name}
          />
          <div className={styles.identityText}>
            <p className={styles.name}>{PROFESSIONAL_SUMMARY.name}</p>
            <p className={styles.identityMeta}>Córdoba · Software Engineer</p>
          </div>
        </div>

        <h1 className={styles.title}>
          Software Engineer building frontend systems and the tooling behind them.
        </h1>
      </div>

      <div className={styles.body}>
        <div className={styles.metaLine} aria-label="Professional profile">
          <div className={styles.roleLine}>
            <span className={styles.roleLabel}>
              {PROFESSIONAL_SUMMARY.title}
            </span>
            <span className={styles.roleDivider} aria-hidden="true">
              /
            </span>
            <span className={styles.roleFocus}>Architecture</span>
            <span className={styles.roleDivider} aria-hidden="true">
              /
            </span>
            <span className={styles.roleFocus}>Developer Tooling</span>
          </div>

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

        <p className={styles.lead}>
          {parseHighlight(PROFESSIONAL_SUMMARY.description)}
        </p>

        <ul className={styles.capabilities} aria-label="Core capabilities">
          {CORE_CAPABILITIES.map((capability) => (
            <li key={capability} className={styles.capability}>
              {capability}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
