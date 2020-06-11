import React from 'react';
import classNames from 'classnames';

import Header from 'components/Hardware/Header';
import Sidebar from 'components/Hardware/Sidebar';
import Stats from 'components/Hardware/Stats';
import Serie from 'components/Hardware/Serie';

import PicComp from 'img/comp.png';
import PicArchive from 'img/archive.png';
import PicNotebook from 'img/notebook.png';
import PicBugfix from 'img/bugfix.png';
import PicGoals from 'img/goals.png';
import PicCovid from 'img/covid.png';
import ArrowLeft from 'img/arrow-left.svg';
import ArrowRight from 'img/arrow-right.svg';
import CornerLeftTop from 'img/L-corner-left-top.svg';

import styles from './style.scss';

const Hardware = () => {
  return (
    <div className={styles.root}>
      <Header />
      <p className={styles.mainTitle}>Сегодня в выпуске</p>
      <div className={styles.mainContent}>
        <div className={styles.mainNews}>
          <div className={styles.mainNews__topNewsWrap}>
            <div className={classNames(styles.mainNews__item, styles.mainNews__topNews)} style={{ backgroundImage: `URL(${PicNotebook})` }}>
              <div className={classNames(styles.corners__item, styles.corners_leftTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_leftBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={styles.mainNews__category}>
                Сделай сам
              </div>
              <div className={classNames(styles.mainNews__title, styles.mainNews__topNews__title)}>
                Блокнот с осциллографом и генератором частот (звуковой картой)
              </div>
              <div
                className={
                  classNames(styles.mainNews__description, styles.mainNews__topNews__description)
                }
              >
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
                <Stats statsWrapper={styles.statsWrapper} />
              </div>
            </div>
          </div>
          <div className={styles.mainNews__doubleNews}>
            <div className={classNames(styles.mainNews__item, styles.mainNews__leftNews)} style={{ backgroundImage: `URL(${PicComp})` }}>
              <div className={classNames(styles.corners__item, styles.corners_leftTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_leftBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={styles.mainNews__category}>
                Железо
              </div>
              <div className={classNames(styles.mainNews__title, styles.mainNews__leftNews__title)}>
                Древности: удаленная работа на устройствах 1998 года
              </div>
              <div
                className={
                  classNames(styles.mainNews__description, styles.mainNews__leftNews__description)
                }
              >
                Поговорим о старых железках. В 2020 году у нас есть множество
                инструментов удаленной работы — от традиционной электронной почты,
                до весьма совершенных мессенджеров, веб-конференций с...
              </div>
              <div className={classNames(styles.mainNews__footer, styles.mainNews__footer_column)}>
                <div className={styles.mainNews__createData}>
                  <span className={styles.author}>f15 / </span>
                  <span className={styles.dateCreate}>22 марта,12:15</span>
                </div>
                <Stats statsWrapper={styles.statsWrapper} />
              </div>
            </div>
            <div className={classNames(styles.mainNews__item, styles.mainNews__rightNews)} style={{ backgroundImage: `URL(${PicArchive})` }}>
              <div className={classNames(styles.corners__item, styles.corners_leftTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightTop)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_leftBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={classNames(styles.corners__item, styles.corners_rightBottom)} style={{ backgroundImage: `URL(${CornerLeftTop})` }} />
              <div className={styles.mainNews__category}>
                Железо
              </div>
              <div className={styles.mainNews__title}>
                Кластер Elasticsearch на 200 ТБ+
              </div>
              <div className={classNames(styles.mainNews__footer, styles.mainNews__footer_column)}>
                <div className={styles.mainNews__createData}>
                  <span className={styles.author}>entropicus / </span>
                  <span className={styles.dateCreate}>22 марта,12:15</span>
                </div>
                <Stats statsWrapper={styles.statsWrapper} />
              </div>
            </div>
          </div>
          <div className={styles.endArticles}>
            На сегодня это всё! Приходите завтра почитать&nbsp;
            <span className={styles.endArticles__bold}>
              об эффективной работе из дома,
              о том как Crash Bandicoot взламывал Playstation, о том с чего начиналось IT и
              об анатомии таблиц LuaJIT и особенностях их использования.
            </span>
          </div>
          <div className={styles.betterArticles}>
            <div className={styles.betterArticles__header}>
              <div className={styles.list}>
                <div className={classNames(styles.list__item, styles.list_active)}>
                  Лучшее за месяц
                </div>
                <div className={styles.list__item}>Лучшее за год</div>
                <div className={styles.list__item}>Лучшее за все время</div>
                <div className={classNames(styles.list__item, styles.list_mobile)}>Год</div>
                <div className={classNames(styles.list__item, styles.list_mobile)}>Все время</div>
              </div>
              <div className={styles.sliderButton}>
                <div className={styles.sliderButton__item} style={{ backgroundImage: `URL(${ArrowLeft})` }} />
                <div className={styles.sliderButton__item} style={{ backgroundImage: `URL(${ArrowRight})` }} />
              </div>
            </div>
            <div className={styles.slider}>
              <div className={styles.slider__item} style={{ backgroundImage: `URL(${PicCovid})` }}>
                <div className={styles.slider__item__title}>
                  AI Против COVID-19: Опыт Хубэя и Флориды
                </div>
                <Stats />
              </div>
              <div className={styles.slider__item} style={{ backgroundImage: `URL(${PicBugfix})` }}>
                <div className={styles.slider__item__title}>
                  Биологические проблемы багфикса
                </div>
                <Stats />
              </div>
              <div className={styles.slider__item} style={{ backgroundImage: `URL(${PicGoals})` }}>
                <div className={styles.slider__item__title}>
                  Цели дня как инструмент управления командой
                </div>
                <Stats />
              </div>
            </div>
          </div>
          <div className={styles.seriesBlock}>
            <div className={styles.seriesBlock__header}>
              <div className={styles.seriesBlock__header__title}>Серии</div>
              <div className={styles.sliderButton}>
                <div className={styles.sliderButton__item} style={{ backgroundImage: `URL(${ArrowLeft})` }} />
                <div className={styles.sliderButton__item} style={{ backgroundImage: `URL(${ArrowRight})` }} />
              </div>
            </div>
            <div className={styles.seriesSlider}>
              <Serie serieWrap={styles.seriesSlider__item} />
              <Serie serieWrap={styles.seriesSlider__item} />
              <Serie
                serieWrap={classNames(styles.seriesSlider__item, styles.seriesSlider_hidden)}
              />
              <Serie
                serieWrap={classNames(styles.seriesSlider__item, styles.seriesSlider_hidden)}
              />
            </div>
          </div>
          <div className={styles.serie}>
            <div className={styles.serie__top}>
              <div className={styles.serie__top__name}>
                Серии
              </div>
              <div className={styles.serie__top__linkAll}>Все серии</div>
            </div>
            <div className={styles.serie__title}>
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
            </div>
            <div className={styles.serie__button}>Читать 27 статей</div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
export default Hardware;
