import React from 'react';
import classNames from 'classnames';

import Header from 'components/Hardware/Header';
import Sidebar from 'components/Hardware/Sidebar';
import Stats from 'components/Hardware/Stats';

import PicComp from 'img/comp.png';
import PicArchive from 'img/archive.png';
import PicNotebook from 'img/notebook.png';

import styles from './style.scss';

const Hardware = () => {
  return (
    <div className={styles.root}>
      <Header />
      <p className={styles.title}>Сегодня в выпуске</p>
      <div className={styles.mainContent}>
        <div className={styles.mainNews}>
          <div className={classNames(styles.mainNews__item, styles.mainNews__topNews)} style={{ backgroundImage: `URL(${PicNotebook})` }}>
            <div className={styles.mainNews__category}>
              Сделай сам
            </div>
            <div className={styles.mainNews__title}>
              Блокнот с осциллографом и генератором частот (звуковой картой)
            </div>
            <div className={styles.mainNews__description}>
              Решил немного написать про свою поделку.
              Несколько раз попадались разнообразные diy линейки.
              Захотелось сделать себе что-то подобное, многофункциональное.
              Форм-фактор линейки мне не очень подходил, решил сделать в виде блокнота.
            </div>
            <div className={styles.mainNews__footer}>
              <div className={styles.mainNews__createData}>
                <span className={styles.author}>GMaksim2008 / </span>
                <span className={styles.dateCreate}>22 марта,12:15</span>
              </div>
              <Stats />
            </div>
          </div>
          <div className={classNames(styles.mainNews__item, styles.mainNews__leftNews)} style={{ backgroundImage: `URL(${PicComp})` }}>
            <div className={styles.mainNews__category}>
              Железо
            </div>
            <div className={styles.mainNews__title}>
              Древности: удаленная работа на устройствах 1998 года
            </div>
            <div className={styles.mainNews__description}>
              Поговорим о старых железках. В 2020 году у нас есть множество
              инструментов удаленной работы — от традиционной электронной почты,
              до весьма совершенных мессенджеров, веб-конференций с...
            </div>
            <div className={styles.mainNews__footer}>
              <div className={styles.mainNews__createData}>
                <span className={styles.author}>f15 / </span>
                <span className={styles.dateCreate}>22 марта,12:15</span>
              </div>
              <Stats />
            </div>
          </div>
          <div className={classNames(styles.mainNews__item, styles.mainNews__rightNews)} style={{ backgroundImage: `URL(${PicArchive})` }}>
            <div className={styles.mainNews__category}>
              Сделай сам
            </div>
            <div className={styles.mainNews__title}>
              Кластер Elasticsearch на 200 ТБ+
            </div>
            <div className={classNames(styles.mainNews__footer, styles.mainNews__footer_column)}>
              <div className={styles.mainNews__createData}>
                <span className={styles.author}>entropicus / </span>
                <span className={styles.dateCreate}>22 марта,12:15</span>
              </div>
              <Stats />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
export default Hardware;
