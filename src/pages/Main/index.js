import React from 'react';
import PropTypes from 'prop-types';

import Layer from 'img/Blaz/layer.png';

import styles from './style.scss';

const Main = ({ history }) => {
  const handleLinkBlazClick = () => {
    history.push('/blaz');
  };

  const handleLinkHardwareClick = () => {
    history.push('/hardware');
  };

  return (
    <div className={styles.page} style={{ backgroundImage: `URL(${Layer})` }}>
      <div className={styles.main}>
        <div className={styles.link} onClick={handleLinkBlazClick}>Blaz</div>
        <div className={styles.link} onClick={handleLinkHardwareClick}>Hardware</div>
      </div>
    </div>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
