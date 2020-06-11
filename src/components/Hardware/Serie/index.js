import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Serie.scss';

const Serie = ({ serieWrap }) => {
  return (
    <div className={classNames(styles.root, serieWrap)}>
      <div className={styles.title}>
        HARDWARE против заблуждений
      </div>
      <div className={styles.articles}>
        <div className={styles.articles__item}>Мифы в IT-образовании</div>
        <div className={styles.articles__item}>
          25 самых популярных мифов о программировании и программистах
        </div>
        <div className={styles.articles__item}>
          У iPhone нет шансов, а компьютеры не нужны.
          Топ-8 самых вопиющих IT-заблуждений в истории
        </div>
        <div className={styles.articles__item}>
          У iPhone нет шансов, а компьютеры не нужны.
          Топ-8 самых вопиющих IT-заблуждений в истории
        </div>
        <div className={styles.articles__item}>
          У iPhone нет шансов, а компьютеры не нужны.
          Топ-8 самых вопиющих IT-заблуждений в истории
        </div>
      </div>
      <div className={styles.button}>Читать 27 статей</div>
    </div>
  );
};

Serie.propTypes = {
  serieWrap: PropTypes.string,
};

Serie.defaultProps = {
  serieWrap: '',
};

export default Serie;
