import React from 'react';

import Stats from 'components/Hardware/Stats';

import TestBack from 'img/test_back.png';
import VideoBack from 'img/video.png';
import PlayIcon from 'img/play-icon.svg';


import styles from './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles.item__top}>
          <div className={styles.item__top__name}>
            Серии
          </div>
          <div className={styles.item__top__linkAll}>Все серии</div>
        </div>
        <div className={styles.item__title}>
          HARDWARE против заблуждений
        </div>
        <div className={styles.articles}>
          <div className={styles.articles__item}>Мифы в IT-образовании</div>
          <div className={styles.articles__item}>
            У iPhone нет шансов, а компьютеры не нужны.
            Топ-8 самых вопиющих IT-заблуждений в истории
          </div>
          <div className={styles.articles__item}>
            У iPhone нет шансов, а компьютеры не нужны.
            Топ-8 самых вопиющих IT-заблуждений в истории
          </div>
        </div>
        <div className={styles.item__button}>Читать 27 статей</div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__top}>
          <div className={styles.item__top__name}>
            Тесты
          </div>
          <div className={styles.item__top__linkAll}>Все тесты</div>
        </div>
        <div className={styles.test} style={{ backgroundImage: `URL(${TestBack})` }}>
          <div className={styles.test__title}>
            Тест: Как хорошо вы знаете HTML и CSS?
          </div>
          <Stats statsWrapper={styles.statsWrapper} />
        </div>
        <div className={styles.item__button}>Пройти тест</div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__top}>
          <div className={styles.item__top__name}>
            Видео
          </div>
          <div className={styles.item__top__linkAll}>Все видео</div>
        </div>
        <div className={styles.video} style={{ backgroundImage: `URL(${VideoBack})` }}>
          <div className={styles.video__play} style={{ backgroundImage: `URL(${PlayIcon})` }} />
        </div>
        <div className={styles.item__videoName}>Учим HTML за 1 Час!</div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__top}>
          <div className={styles.item__top__name}>
            Надысь
          </div>
          <div className={styles.item__top__linkAll}>Все новости</div>
        </div>
        <div className={styles.date}>24 апреля</div>
        <div className={styles.time}>15:00</div>
        <div className={styles.articleTitle}>
          NVIDIA расширяет бесплатный 90-дневный доступ к ПО для поддержки удаленных работников
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
