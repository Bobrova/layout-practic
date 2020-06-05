import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import EyeIcon from 'img/eye-icon.svg';
import DogIcon from 'img/dog-icon.svg';
import DialogIcon from 'img/dialog-icon.svg';
import ShareIcon from 'img/share-icon.svg';

import styles from './Stats.scss';

const Stats = ({ statsWrapper }) => {
  return (
    <div className={classNames([styles.root], [statsWrapper])}>
      <div className={styles.item}>
        <div className={styles.icon} style={{ backgroundImage: `URL(${EyeIcon})` }} />
        <div className={styles.number}>4567</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} style={{ backgroundImage: `URL(${DogIcon})` }} />
        <div className={styles.number}>12</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} style={{ backgroundImage: `URL(${DialogIcon})` }} />
        <div className={styles.number}>45</div>
      </div>
      <div className={styles.item}>
        <div className={styles.icon} style={{ backgroundImage: `URL(${ShareIcon})` }} />
        <div className={styles.number}>678</div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  statsWrapper: PropTypes.string,
};

Stats.defaultProps = {
  statsWrapper: '',
};

export default Stats;
