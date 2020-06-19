import React from 'react';
import classNames from 'classnames';

import styles from './style.scss';

const MainSeparator = () => {
  return (
    <div className={classNames(styles.root, styles.blockSeparator)}>
      <div className={styles.blockSeparator__color1} />
      <div className={styles.blockSeparator__color2} />
      <div className={styles.blockSeparator__color3} />
      <div className={styles.blockSeparator__color4} />
      <div className={styles.blockSeparator__color5} />
      <div className={styles.blockSeparator__color1} />
      <div className={styles.blockSeparator__color2} />
      <div className={styles.blockSeparator__color3} />
      <div className={styles.blockSeparator__color4} />
      <div className={styles.blockSeparator__color5} />
      <div className={styles.blockSeparator__color1} />
      <div className={styles.blockSeparator__color2} />
      <div className={styles.blockSeparator__color3} />
    </div>
  );
};

export default MainSeparator;
