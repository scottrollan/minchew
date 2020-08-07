import React from 'react';
import photo from '../assets/help.jpg';
import styles from './Advertisers.module.scss';

const Advertisers = () => {
  return (
    <div className={styles.advertisers}>
      <div className={styles.overlay}></div>
      <img src={photo} alt="" />
      <div className={styles.sticky}>
        <div className={styles.pageName}>
          <h1 className={styles.content}>Advertisers</h1>
        </div>
      </div>{' '}
      <p>Looking for a media partner to help you maximize your ROI?</p>
      <p>
        Whether your marketing plans call for one market, one hundred markets or
        all 210, Minchew Media is your go-to source for all things electronic
        media.
      </p>
      <p>
        At Minchew Media, we can provide you with soup to nuts media planning
        and placement for your Brand or Direct Response campaign.
      </p>
      <p>
        We specialize in all forms of electronic media and will make sure that
        you are utilizing the correct media for your objectives and target
        audience, including both traditional and new media outlets.
      </p>
      <ul>
        <b>We have experience with all forms of electronic media including:</b>
        <li>
          TV - spot cable and broadcast, network cable and broadcast,
          syndication and unwired networks.
        </li>
        <li>Radio - national, local, syndicated, satellite and digital</li>
        <li>New Media - digital video and display, VOD and more....</li>
      </ul>
      <p>
        Yes, we utilize research, but our approach is always common sense based
        and customized specifically to achieve your campaign objectives as
        efficiently possible.
      </p>
      <p>
        <strong>Minchew Media</strong> - <i>Your Media Maximized</i>
      </p>
    </div>
  );
};

export default Advertisers;
