import React from 'react';
import Tag from './home/Tag';
import ProfileInfo from './home/ProfileInfo';
import MobilePopup from './home/Popup';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <ProfileInfo />
      <div className={styles.tagContainer}>
        <Tag />
      </div>
      <MobilePopup />
    </div>
  );
};

export default Home;
