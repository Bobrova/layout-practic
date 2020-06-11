import React from 'react';
import classNames from 'classnames';

import HardwareSVG from 'img/Hardware.svg';
import Search from 'img/Search.svg';
import SearchWhite from 'img/search-white.svg';
import logoWrap from 'img/logo.svg';
import logo from 'img/h-logo.svg';

import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header_top}>
        <div className={styles.mobilePosition}>
          <div className={styles.mobileLeftHeader}>
            <div className={classNames(styles.dropDawn, styles.dropDawnMobile)} />
            <div className={styles.logoWrap} style={{ backgroundImage: `URL(${logoWrap})` }}>
              <div className={styles.logo} style={{ backgroundImage: `URL(${logo})` }} />
            </div>
          </div>
          <div className={styles.mobileRightHeader}>
            <div className={classNames(styles.loupe, styles.loupeMobile)} style={{ backgroundImage: `URL(${SearchWhite})` }} />
            <div className={styles.login}>
              <span>Вход</span>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <img src={HardwareSVG} alt="Hardware" className={styles.categoryName} />
          <div className={styles.categoryDescription}>
            <p className={styles.description}>
              Здесь думающие люди делятся уникальным опытом. Здесь будет одинаково
              интересно программистам и журналистам, админам и рекламщикам,
              аналитикам и дизайнерам, менеджерам высшего и среднего звена,
              владельцам крупных компаний и небольших ​фирм, ​а также ​всем ​тем, ​для
              кого IT — это не просто две буквы алфавита.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.menuLinks}>
          <div className={classNames(styles.dropDawn, styles.dropDawnDesktop)} />
          <div className={styles.link}>Новости</div>
          <div className={styles.link}>Видео</div>
          <div className={styles.link}>Тесты</div>
          <div className={styles.link}>Серии</div>
          <div className={styles.link}>Рубрики</div>
          <div className={classNames(styles.link, styles.searchTable)}>Поиск</div>
        </div>
        <div className={classNames(styles.loupe, styles.loupeDesktop)} style={{ backgroundImage: `URL(${Search})` }} />
      </div>
    </div>
  );
};

export default Header;
