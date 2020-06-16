import React from 'react';

import Comments from 'img/Blaz/comments.svg';
import Like from 'img/Blaz/like.svg';
import DownloadLayer from 'img/Blaz/download-layer.png';

import styles from './style.scss';

const Download = () => {
  return (
    <div className={styles.root}>
      <div className={styles.otherDownloadsList__item}>
        <div className={styles.otherDownloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
          <div className={styles.otherDownloadsList__item__plus} />
        </div>
        <div className={styles.otherDownloadsList__item__name}>PSD Ribbon Set</div>
        <div className={styles.otherDownloadsList__item__text}>
          Free YouTube Player Skin Photoshop (PSD) template.
          Great for mocking up video content. Free Youtube Player Skin Phtoshop (PSD)
        </div>
        <span style={{ color: '#bdbdbd', fontSize: '24px' }}>....</span>
        <div className={styles.information}>
          <div className={styles.create}>
            <span className={styles.create__dateCreate}>10th September 2011&nbsp;</span>
            <span className={styles.create__author}>By Blaz</span>
          </div>
          <div className={styles.stats}>
            <div className={styles.stats__item}>
              <span className={styles.stats__item__count}>11</span>
              <div className={styles.stats__item__icon} style={{ backgroundImage: `URL(${Comments})` }} />
            </div>
            <div className={styles.stats__item}>
              <span className={styles.stats__item__count}>231</span>
              <div className={styles.stats__item__icon} style={{ backgroundImage: `URL(${Like})` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
