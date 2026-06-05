import React from 'react';
import styles from '@/styles/Projects.module.css';
import { PROJECTS } from '@/constants';

const ProjectCard = React.memo(({ project }) => {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <h3 className={styles.cardTitle}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardTitleLink}
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className={styles.cardMeta}>
          <span>{project.year}</span>
          <span className={styles.metaDot} aria-hidden="true">·</span>
          <span className={styles.cardCategory}>{project.category}</span>
          {project.githubUrl ? (
            <>
              <span className={styles.metaDot} aria-hidden="true">·</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                aria-label={`Open ${project.title} on GitHub`}
              >
                <span className={styles.cardLinkLabel}>View repo</span>
                <span className={styles.cardLinkArrow} aria-hidden="true">↗</span>
              </a>
            </>
          ) : null}
        </p>
      </header>

      <p className={styles.cardDescription}>{project.description}</p>

      <ul className={styles.cardTags}>
        {project.technologies.map((tech, techIndex) => (
          <li key={tech} className={styles.tag}>
            <span>{tech}</span>
            {techIndex < project.technologies.length - 1 ? (
              <span className={styles.tagDot} aria-hidden="true">·</span>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  return (
    <section className={styles.section} id="projects">
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.headerIndex} aria-hidden="true">02</span>
          <p className={styles.eyebrow}>Projects</p>
        </div>
        <h2 className={styles.sectionTitle}>
          Selected work on AI developer tooling, agentic workflows
          <span className={styles.sectionTitleAccent}> and frontend automation.</span>
        </h2>
      </header>

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
