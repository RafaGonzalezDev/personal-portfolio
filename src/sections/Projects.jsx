import React from 'react';
import styles from '@/styles/Projects.module.css';
import { PROJECTS } from '@/constants';

const ProjectRow = React.memo(({ project, index }) => {
  const indexLabel = String(index + 1).padStart(2, '0');
  return (
    <article className={styles.row}>
      <div className={styles.titleLine}>
        <h3 className={styles.projectTitle}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.titleLink}
          >
            {project.title}
          </a>
        </h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
            aria-label={`View ${project.title} on GitHub`}
          >
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <p className={styles.meta}>
        <span className={styles.index}>{indexLabel}</span>
        {' · '}
        <span className={styles.year}>{project.year}</span>
        {' · '}
        <span className={styles.category}>{project.category}</span>
      </p>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tags}>
        {project.technologies.map((tech) => (
          <li key={tech} className={styles.tag}>
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
});

ProjectRow.displayName = 'ProjectRow';

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <header className={styles.header}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIndex}>02.</span>Projects
        </h2>
        <p className={styles.subtitle}>
          Selected work on AI developer tooling, agentic workflows and frontend
          automation.
        </p>
      </header>

      <div className={styles.list}>
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
