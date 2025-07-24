import React from 'react';
import styles from '../styles/Contact.module.css';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <h2 className={styles.title}>{CONTACT_INFO.title}</h2>
      <p className={styles.infoText}>{CONTACT_INFO.description}</p>
      
      <div className={styles.contactCardsContainer}>
        {CONTACT_INFO.contactMethods.map((method) => (
          <div key={method.id} className={styles.contactCard}>
            <a 
              href={method.link} 
              className={styles.contactCardLink} 
              aria-label={method.title} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className={`fab ${method.icon} ${styles.contactIcon}`}></i>
              <span className={styles.contactValue}>{method.value}</span>
            </a>
          </div>
        ))}
      </div>
      
      <div className={styles.contactMessage}>
        <p>{CONTACT_INFO.closing}</p>
      </div>
    </section>
  );
};

export default Contact;