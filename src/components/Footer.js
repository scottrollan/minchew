import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div>
        <strong>Minchew Media</strong> - Your Media Maximized
      </div>
      <div>
        Minchew Media, LLC &#183; 678-368-4740 &#183; 32 Lakeshore Dr - Marietta
        Georgia 30067
      </div>
      <div>
        Content &#169; {thisYear}. Minchew Media, LLC. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
