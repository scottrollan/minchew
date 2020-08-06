import React from 'react';
import { ScrollText } from '../components/ScrollText';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={[`${styles.textScrollDiv} ${styles.eighty} `]}>
        <div className={styles.scrollWrapper}>
          <div className={styles.maximized}>
            <p className={styles.first}>YOUR</p>
            <p className={styles.second}>MEDIA</p>
            <p className={styles.third}>MAZIMIZED</p>
          </div>
          <div className={styles.scroller}>
            <ScrollText />
          </div>
        </div>
      </div>
      <div className={styles.scrollWrapperMobile}>
        <div className={styles.scrollerMobile}>
          <ScrollText />
        </div>
      </div>
      <div className={styles.welcome}>
        <h2>Welcome to Minchew Media</h2>
        <p>
          If you are an advertiser or advertising agency looking for expert
          media services, you've come to the right place.
        </p>
        <p>
          Whether your marketing plans call for one market, one hundred markets
          or all 210, Minchew Media is your go-to source for all things
          electronic media. We specialize in all forms of electronic media and
          will make sure that you are utilizing the correct media for your
          objectives and target audience, including both traditional and new
          media outlets.
        </p>
        <p>
          <strong>
            We have experience with all forms of electronic media including:
          </strong>
        </p>
        <ul>
          <li>
            TV - spot cable and broadcast, network cable and broadcast,
            syndication and unwired networks
          </li>
          <li>Radio - national, local, syndicated, satellite and digital</li>
          <li>New Media - digital video and display, VOD and more....</li>
        </ul>
        <p>
          We don't have a proprietary system or promise you the lowest rates
          available. Instead, we make sure we understand your campaign
          objectives and success metrics. From there, we build custom solutions
          for each project we work on. Yes, we utilize research, but our
          approach is always common sense based. Every campaign we create is
          customized specifically to achieve your campaign objectives as
          efficiently as possible. Efficient media is great, but our goal is to
          build and deliver advertising campaigns that are not just efficient,
          but that execute flawlessly and over deliver.{' '}
        </p>
        <p>
          Stellar customer service and acute attention to detail is at the heart
          of everything we do. We're not happy unless you are delighted.
        </p>
      </div>
    </div>
  );
};

export default Home;
