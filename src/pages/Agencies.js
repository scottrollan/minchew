import React from 'react';
import photo from '../assets/gears.jpg';
import styles from './Agencies.module.scss';

const Agencies = () => {
  return (
    <div className={styles.agencies}>
      <div className={styles.overlay}></div>
      <img src={photo} alt="" />
      <div className={styles.sticky}>
        <div className={styles.pageName}>
          <h1 className={styles.content}>Agencies</h1>
        </div>
      </div>
      <p>
        Have an advertising project out of your scope of expertise? Too many
        markets to manage? Looking for some innovative solutions or a fresh
        approach? Better Efficiencies? Branding or Direct Response?
      </p>
      <p>
        Minchew Media can provide you with project assistance or serve as your
        white label media department.
      </p>
      <ul>
        <b>
          We'll provide you with client ready documentation all the way through
          the project cycle including:
        </b>
        <li>Planning, Negotiating, Buying</li>
        <li>Stewardship</li>
        <li>Reconciliation and Invoicing</li>
      </ul>
      <p>
        We are Strata<sup>&#8482;</sup> licensed and conversant.
      </p>
      <p>Prompt reliable exemplary service is at the heart of every project.</p>
    </div>
  );
};

export default Agencies;
