import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <strong>Minchew Media</strong> - Your Media Maximized
      </div>
      <div>
        Minchew Media, LLC &#183; 678-368-4740 &#183; 32 Lakeshore Dr - Marietta
        Georgia 30067
      </div>
      <div>Content &#169; 2020. Minchew Media, LLC. All rights reserved.</div>
    </div>
  );
};

export default Footer;
