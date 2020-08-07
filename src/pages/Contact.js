import React from 'react';
import { Container } from 'react-bootstrap';
import AlertMessageSent from './AlertMessageSent';
import styles from './Contact.module.scss';

import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <AlertMessageSent />
      <div className={styles.contactGrid}>
        <div className={styles.form}>
          <ContactForm />
        </div>
        <div className={styles.pic}>
          <div className={styles.tagline}>
            <span>Y</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </div>
          <div className={styles.tagline}>
            <span>M</span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>A</span>
          </div>
          <div className={styles.tagline}>
            <span>M</span>
            <span>A</span>
            <span>X</span>
            <span>I</span>
            <span>M</span>
            <span>I</span>
            <span>Z</span>
            <span>E</span>
            <span>D</span>
          </div>
        </div>
        <div className={styles.address}>
          <h4 className={styles.responsiveTitle}>Minchew Media</h4>
          <p>32 Lakeshore Dr</p>
          <p>Marietta, GA 30067</p>
          <a href="tel:16783684740">
            <p>Tel: 678-368-4740</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
