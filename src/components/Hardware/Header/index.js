import React from 'react';
import HardwareSVG from 'img/Hardware.svg';
import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.login}>
        <span>Вход</span>
      </div>
      <div className={styles.content}>
        <div className={styles.categoryName} style={{ background: `URL(${HardwareSVG})` }} />
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
  );
};

export default Header;
