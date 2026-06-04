import React from 'react';
import styles from '@/styles/Contact.module.css';
import { CONTACT_INFO } from '@/constants';

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleIndex}>03.</span>Contact
        </h2>
        <p className={styles.subtitle}>{CONTACT_INFO.description}</p>
      </header>

      <ul className={styles.list}>
        {CONTACT_INFO.contactMethods.map((method) => (
          <li key={method.id} className={styles.item}>
            <span className={styles.itemLabel}>{method.title}</span>
            <a
              href={method.link}
              className={styles.itemLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.itemValue}>{method.value}</span>
              <span className={styles.itemArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className={styles.footer}>{CONTACT_INFO.closing}</p>
    </section>
  );
};

export default Contact;
