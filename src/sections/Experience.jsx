import React from 'react';
import styles from '@/styles/Experience.module.css';
import { EXPERIENCES } from '@/constants';
import { parseHighlight } from '@/utils';

/**
 * Función utilitaria para formatear descripciones de experiencia
 * Procesa texto multilinea separando resumen, logros y tecnologías
 * 
 * @param {string} description - Descripción de la experiencia en formato texto
 * @returns {JSX.Element} Elementos JSX formateados con estructura semántica
 */
const formatDescription = (description) => {
  // Separar en líneas
  const lines = description.split('\n');
  // La primera línea suele ser un resumen, el resto son logros con guion
  const summary = lines[0].replace(/^- /, '').trim();
  const bullets = lines.slice(1)
    .map(line => line.trim())
    .filter(line => line.startsWith('-'));
  
  // Buscar si hay una línea de tecnologías
  const techLine = lines.find(line => line.startsWith('Technologies:'));
  const technologies = techLine ? techLine.replace('Technologies:', '').trim() : '';
  
  return (
    <>
      {summary && <p className={styles.description}>{parseHighlight(summary)}</p>}
      {bullets.length > 0 && (
        <ul className={styles.descriptionList}>
          {bullets.map((b, i) => (
            <li key={i}>{parseHighlight(b.replace(/^- /, ''))}</li>
          ))}
        </ul>
      )}
      {techLine && (
        <div className={styles.techSection}>
          <p className={styles.techTitle}>Technologies:</p>
          <p className={styles.techList}>{parseHighlight(technologies)}</p>
        </div>
      )}
    </>
  );
};

const Experience = () => {
  return (
    <section className={`${styles.experienceSection}`} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {EXPERIENCES.map((exp, index) => {
          const side = index % 2 === 0 ? styles.left : styles.right;
          return (
            <div
              key={index}
              className={`${styles.timelineItem} ${side}`}
            >
              <div className={styles.iconCircle} aria-label="Punto de experiencia" title="Punto de experiencia" />
              <div className={styles.content}>
                <span className={styles.date}>{exp.date}</span>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                {formatDescription(exp.description)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;