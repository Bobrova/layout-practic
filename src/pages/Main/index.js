import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Main = ({ history }) => {
  const handleLinkClick = () => {
    history.push('/blaz');
  };

  return (
    <section className={styles.page}>
      <div className={styles.main}>
        <div className={styles.link} onClick={handleLinkClick}>Blaz</div>
      </div>
    </section>
  );
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Main;
