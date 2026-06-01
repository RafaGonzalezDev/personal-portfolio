import React from 'react';
import styles from '@/styles/Experience.module.css';
import { EXPERIENCES } from '@/constants';
import { parseHighlight } from '@/utils';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getMonthLabel = (month) => MONTH_LABELS[month - 1];

const getDisplayEndDate = (experience) => {
  if (experience.isCurrent || experience.end === null) {
    return 'Present';
  }

  return `${getMonthLabel(experience.end.month)} ${experience.end.year}`;
};

const getDurationInMonths = (start, end) => {
  const endDate = end ?? {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };

  return ((endDate.year - start.year) * 12) + (endDate.month - start.month) + 1;
};

const formatDuration = (start, end) => {
  const totalMonths = getDurationInMonths(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }

  return parts.join(' ');
};

const formatExperienceDate = (experience) => {
  const startDate = `${getMonthLabel(experience.start.month)} ${experience.start.year}`;
  const endDate = getDisplayEndDate(experience);
  const duration = formatDuration(experience.start, experience.end);

  return `${startDate} - ${endDate} · ${duration}`;
};

const formatDescription = (description) => {
  const lines = description.split('\n');
  const paragraphs = lines.filter((line) => line.trim());

  return (
    <>
      {paragraphs.map((para, index) => (
        <p key={index} className={styles.description}>
          {parseHighlight(para.replace(/^- /, ''))}
        </p>
      ))}
    </>
  );
};

const Experience = () => {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {EXPERIENCES.map((experience, index) => {
          const side = index % 2 === 0 ? styles.left : styles.right;

          return (
            <div
              key={`${experience.company}-${experience.role}-${experience.start.month}-${experience.start.year}`}
              className={`${styles.timelineItem} ${side}`}
            >
              <div className={styles.iconCircle} aria-label="Experience point" title="Experience point" />
              <div className={styles.content}>
                <span className={styles.date}>{formatExperienceDate(experience)}</span>
                <h3 className={styles.company}>{experience.company}</h3>
                <p className={styles.role}>{experience.role}</p>
                {formatDescription(experience.description)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
