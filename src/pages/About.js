import React from 'react';
import photo from '../assets/negotiate.jpg';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <p>
        Specializing in all forms of electronic media, Michele Minchew brings
        twenty six years of media buying and selling experience to her partner
        clients.
      </p>
      <p>
        At the helm of Minchew Media, Michele has sold almost every media she
        buys - including spot radio &amp; cable, network cable and digital. What
        that means to you is that you get a media services partner with
        experience on both sides of the negotiating table.
      </p>
      <img src={photo} alt="" />
      <p>
        Michele understands how media is negotiated and placed, and leverages
        strong vendor partnerships around the country.
      </p>
      <p>
        Having experience on both sides of the negotiating table allows her to
        see twice as well when planning your project.
      </p>
    </div>
  );
};

export default About;
