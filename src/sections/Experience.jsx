import React from 'react';
import styles from '@/styles/Experience.module.css';
import { EXPERIENCES } from '@/constants';
import { parseHighlight } from '@/utils';

const MONTH_LABELS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

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
  return (endDate.year - start.year) * 12 + (endDate.month - start.month) + 1;
};

const formatDuration = (start, end) => {
  const totalMonths = getDurationInMonths(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yr'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mo'}`);
  }

  return parts.length > 0 ? parts.join(' ') : '< 1 mo';
};

const formatExperienceDate = (experience) => {
  const startDate = `${getMonthLabel(experience.start.month)} ${experience.start.year}`;
  const endDate = getDisplayEndDate(experience);
  const duration = formatDuration(experience.start, experience.end);
  return `${startDate} — ${endDate}  ·  ${duration}`;
};

const formatMeta = (experience) => {
  const date = formatExperienceDate(experience);
  return experience.location ? `${date}  ·  ${experience.location}` : date;
};

const formatDescription = (description) => {
  const lines = description.split('\n');
  const paragraphs = lines.filter((line) => line.trim());
  return (
    <>
      {paragraphs.map((para, index) => (
        <p key={index}>{parseHighlight(para.replace(/^- /, ''))}</p>
      ))}
    </>
  );
};

const Experience = () => {
  return (
    <section className={styles.section} id="experience">
      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleIndex}>01.</span>Experience
        </h2>
      </header>

      <ol className={styles.list}>
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.company}-${experience.role}-${experience.start.month}-${experience.start.year}`}
            className={styles.item}
          >
            <div className={styles.head}>
              <h3 className={styles.company}>{experience.company}</h3>
              <p className={styles.role}>{experience.role}</p>
              <p className={styles.meta}>{formatMeta(experience)}</p>
            </div>

            <div className={styles.body}>
              <div className={styles.description}>
                {formatDescription(experience.description)}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
