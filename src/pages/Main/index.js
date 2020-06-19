import React from 'react';
import PropTypes from 'prop-types';

import Layer from 'img/Blaz/layer.png';

import styles from './style.scss';

const Main = ({ history }) => {
  const handleLinkClick = e => {
    const path = e.target.getAttribute('data-path');
    history.push(path);
  };

  return (
    <div className={styles.page} style={{ backgroundImage: `URL(${Layer})` }}>
      <div className={styles.main}>
        <div className={styles.link} data-path="/blaz" onClick={handleLinkClick}>Blaz</div>
        <div className={styles.link} data-path="/hardware" onClick={handleLinkClick}>Hardware</div>
        <div className={styles.link} data-path="/twobytes" onClick={handleLinkClick}>TwoBytes</div>
      </div>
    </div>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
