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
          <div className={[`${styles.tagline} ${styles.first}`]}>Your</div>
          <div className={[`${styles.tagline} ${styles.second}`]}>Media</div>
          <div className={[`${styles.tagline} ${styles.third}`]}>Maximized</div>
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
