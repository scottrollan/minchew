import React from 'react';
import styles from '../pages/Home.module.scss';

export const ScrollText = () => {
  return (
    <div>
      <p className={styles.testimonial}>
        Thank you – as I am fussing about an agency that I work with that is
        sooo uncooperative, I say aloud….”why can’t they all be Michele
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
        I am not someone who gives compliments freely and I'd like you to take
        this feedback into that context. This is the first time I get to see
        what if feels like on "the other side of the desk." (Yes, we have to go
        out and get new business, but then we put on our media buyer caps and
        deal with reps.) I am amazed by the overall poor service I receive,
        especially in a down economy! You, on the other hand, truly have gone
        THE EXTRA MILE in your response, and I'm nothing short of amazed.
      </p>
      <p className={styles.signature}>- Media Director, Partner Agency</p>
      <p className={styles.testimonial}>
        While having always been in sales (ten years in financial sales), I am
        an analytical and can go toe-to-toe with most research directors. Your
        extensive research was spectacular. You are truly to be commended for
        your outstanding efforts! What a true professional you are!
      </p>
      <p className={styles.signature}>- Media Director, Partner Agency</p>
      <p className={styles.testimonial}>I LOVE YOU</p>
      <p className={styles.signature}>
        - VP Senior Account Services, Partner Agency
      </p>
      <p className={styles.testimonial}>
        I enjoyed working with you. And, I greatly appreciate all your
        assistance and efforts in making our schedules a success! I hope we have
        the opportunity to work together again.
      </p>
      <p className={styles.signature}>- VP Media Services, Partner Agency</p>
    </div>
  );
};
