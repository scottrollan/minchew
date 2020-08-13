import React from 'react';
import styles from './Experience.module.scss';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.overlay}></div>
      <div className={styles.sticky}>
        <div className={styles.pageName}>
          <h1 className={styles.content}>Experience</h1>
        </div>
      </div>
      <p>
        Satisfied clients are at the heart of what we do. We're pleased to count
        the following among some of the brands we have worked for:{' '}
      </p>
      <div className={styles.clients}>
        <span>Amtrak</span>
        <span>e.p.t.</span>
        <span>Kitchen Basics</span>
        <span>Monistat</span>
        <span>Nature Sweet Tomatoes</span>
        <span>Nix</span>
        <span>Penguin Books</span>
        <span>Professional Products Unlimited</span>
        <span>Pure Romance</span>
        <span>Sucrets</span>
        <span>Visionworks Of America</span>
      </div>
    </div>
  );
};

export default Experience;
