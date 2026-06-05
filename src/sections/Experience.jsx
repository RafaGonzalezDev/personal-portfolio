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
  return `${startDate} — ${endDate}`;
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
        <div className={styles.headerTop}>
          <span className={styles.headerIndex} aria-hidden="true">01</span>
          <p className={styles.eyebrow}>Experience</p>
        </div>
        <h2 className={styles.sectionTitle}>
          A track record of shipping production frontend
          <span className={styles.sectionTitleAccent}> at scale.</span>
        </h2>
      </header>

      <ol className={styles.list}>
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.company}-${experience.role}-${experience.start.month}-${experience.start.year}`}
            className={styles.item}
          >
            <aside className={styles.timelineMeta} aria-label="Experience period">
              <span className={styles.timelineDate}>{formatExperienceDate(experience)}</span>
              <span className={styles.timelineDuration}>{formatDuration(experience.start, experience.end)}</span>
            </aside>

            <span className={styles.timelineMarker} aria-hidden="true" />

            <div className={styles.itemCard}>
              <header className={styles.itemHead}>
                <div className={styles.titleLine}>
                  <h3 className={styles.company}>{experience.company}</h3>
                  <p className={styles.role}>{experience.role}</p>
                </div>
                <div className={styles.metaLine}>
                  {experience.location ? <span>{experience.location}</span> : null}
                  {experience.isCurrent ? (
                    <span className={styles.badge}>
                      <span className="status-dot" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </div>
              </header>

              <div className={styles.itemBody}>
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
