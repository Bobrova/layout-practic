import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const App = ({ history }) => {
  const handleLinkClick = () => {
    console.log('here');
    history.push('/layout1');
  };

  return (
    <section className={styles.page}>
      <div className={styles.main}>
        <div className={styles.link} onClick={handleLinkClick}>Layout</div>
      </div>
    </section>
  );
};

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
