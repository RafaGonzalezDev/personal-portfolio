import styles from '@/styles/TechStack.module.css';
import { TECH_STACK } from '@/constants';

const GROUPS = [
  {
    index: '01',
    label: 'Frameworks & Libraries',
    technologies: [
      'Angular',
      'React',
      'TypeScript',
      'Node.js',
      'RxJS',
      'NgRx',
    ],
  },
  {
    index: '02',
    label: 'AI & Developer Tooling',
    technologies: [
      'MCP',
      'Playwright',
      'llama.cpp',
      'OpenWebUI',
    ],
  },
  {
    index: '03',
    label: 'Infrastructure & DevOps',
    technologies: [
      'Microfrontends',
      'Module Federation',
      'Vite',
      'Git',
      'CI/CD',
      'AWS Amplify',
      'Tailwind CSS',
      'GraphQL',
    ],
  },
];

const TechStack = () => {
  return (
    <section className={styles.section} id="tech-stack">
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.headerIndex} aria-hidden="true">03</span>
          <p className={styles.eyebrow}>Tech Stack</p>
        </div>
        <h2 className={styles.sectionTitle}>
          The tools and technologies
          <span className={styles.sectionTitleAccent}> behind the work.</span>
        </h2>
      </header>

      {GROUPS.map((group) => (
        <div key={group.label} className={styles.group}>
          <header className={styles.groupHeader}>
            <span className={styles.groupIndex} aria-hidden="true">
              {group.index}
            </span>
            <h3 className={styles.groupTitle}>{group.label}</h3>
          </header>

          <ul className={styles.list} aria-label={group.label}>
            {group.technologies.map((tech, i, arr) => (
              <li key={tech} className={styles.item}>
                <span className={styles.techName}>{tech}</span>
                {i < arr.length - 1 && (
                  <span className={styles.dot} aria-hidden="true">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
