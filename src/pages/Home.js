import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={[`${styles.textScrollDiv} ${styles.eighty} `]}>
        <div className={styles.scrollWrapper}>
          <div className={styles.scroller}>
            <p className={styles.testimonial}>
              Thank you – as I am fussing about an agency that I work with that
              is sooo uncooperative, I say aloud….”why can’t they all be Michele
              Minchew”!!! You truly are a pleasure!
            </p>
            <p className={styles.signature}>
              - Becky McAlexander, Account Executive Comcast Spotlight
            </p>
            <p className={styles.testimonial}>
              You have been kick ass! It was great working with you.
            </p>
            <p className={styles.signature}>
              - Assistant Media Planner, Partner Agency
            </p>{' '}
            <p className={styles.testimonial}>
              I am not someone who gives compliments freely and I'd like you to
              take this feedback into that context. This is the first time I get
              to see what if feels like on "the other side of the desk." (Yes,
              we have to go out and get new business, but then we put on our
              media buyer caps and deal with reps.) I am amazed by the overall
              poor service I receive, especially in a down economy! You, on the
              other hand, truly have gone THE EXTRA MILE in your response, and
              I'm nothing short of amazed.
            </p>
            <p className={styles.signature}>- Media Director, Partner Agency</p>
            <p className={styles.testimonial}>
              While having always been in sales (ten years in financial sales),
              I am an analytical and can go toe-to-toe with most research
              directors. Your extensive research was spectacular. You are truly
              to be commended for your outstanding efforts! What a true
              professional you are!
            </p>
            <p className={styles.signature}>- Media Director, Partner Agency</p>
            <p className={styles.testimonial}>I LOVE YOU</p>
            <p className={styles.signature}>
              - VP Senior Account Services, Partner Agency
            </p>
            <p className={styles.testimonial}>
              I enjoyed working with you. And, I greatly appreciate all your
              assistance and efforts in making our schedules a success! I hope
              we have the opportunity to work together again.
            </p>
            <p className={styles.signature}>
              - VP Media Services, Partner Agency
            </p>
          </div>
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
