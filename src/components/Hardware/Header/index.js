import React from 'react';
import classNames from 'classnames';

import HardwareSVG from 'img/Hardware.svg';
import Loupe from 'img/Loupe.svg';
import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header_top}>
        <div className={styles.login}>
          <span>Вход</span>
        </div>
        <div className={styles.category}>
          <div className={styles.categoryName} style={{ backgroundImage: `URL(${HardwareSVG})` }} />
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
          <div className={styles.dropDawn} />
          <div className={styles.link}>Надысь</div>
          <div className={styles.link}>Видео</div>
          <div className={styles.link}>Тесты</div>
          <div className={styles.link}>Серии</div>
          <div className={styles.link}>Рубрики</div>
          <div className={classNames(styles.link, styles.hidden)}>Поиск</div>
        </div>
        <div className={styles.search} style={{ backgroundImage: `URL(${Loupe})` }} />
      </div>
    </div>
  );
};

export default Header;
