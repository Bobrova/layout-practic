import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Main = ({ history }) => {
  const handleLinkBlazClick = () => {
    history.push('/blaz');
  };

  const handleLinkHardwareClick = () => {
    history.push('/hardware');
  };

  return (
    <section className={styles.page}>
      <div className={styles.main}>
        <div className={styles.link} onClick={handleLinkBlazClick}>Blaz</div>
        <div className={styles.link} onClick={handleLinkHardwareClick}>Hardware</div>
      </div>
    </section>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
