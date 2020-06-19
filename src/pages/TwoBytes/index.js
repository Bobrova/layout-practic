import React from 'react';
// import classNames from 'classnames';

import MainSeparator from 'components/TwoBytes/MainSeparator';

import HeaderBack from 'img/TwoBytes/headerbg.png';
import MailIcon from 'img/TwoBytes/mail-icon.png';
import MailIconBlue from 'img/TwoBytes/mail-icon-blue.png';
import FacebookLike from 'img/TwoBytes/facebook.png';
import TwitterLike from 'img/TwoBytes/twitter.png';

import styles from './style.scss';

const TwoBytes = () => {
  return (
    <div className={styles.root}>
      <div className={styles.page}>
        <div className={styles.header} style={{ backgroundImage: `URL(${HeaderBack})` }}>
          <div className={styles.header__top}>
            <div className={styles.logo}>
              <span className={styles.logo__firstWord}>two</span>
              <span className={styles.logo__secondWord}>bytes</span>
              <span className={styles.logo__thirdWord}>consulting</span>
            </div>
            <div className={styles.menu}>
              <div className={styles.menu__item}>Home</div>
              <div className={styles.menu__item}>About us</div>
              <div className={styles.menu__item}>Jobs</div>
              <div className={styles.menu__item}>Clients</div>
              <div className={styles.menu__item}>Employers</div>
              <div className={styles.menu__item}>Contact us</div>
            </div>
          </div>
          <div className={styles.header__main}>
            <div className={styles.search}>
              <div className={styles.search__title}>I&#39;m looking for..</div>
              <div className={styles.search__inputBlock}>
                <input type="text" className={styles.search__input} placeholder="Enter a Job Description" />
                <div className={styles.search__btnSearch}>
                  <span className={styles.search__btnSearch__loupe}>&#128269;</span>
                  Search
                </div>
              </div>
              <div className={styles.search__options}>
                <div className={styles.search__checkboxes}>
                  <div className={styles.search__checkboxes__item}>
                    <label className={styles.checkboxContainer}>
                      Full Time
                      <input type="checkbox" />
                      <span className={styles.checkmark} />
                    </label>
                  </div>
                  <div className={styles.search__checkboxes__item}>
                    <label className={styles.checkboxContainer}>
                      Part Time / Casual / Freelance
                      <input type="checkbox" />
                      <span className={styles.checkmark} />
                    </label>
                  </div>
                </div>
                <div className={styles.search__dropdown}>
                  Select your Location
                  <div className={styles.search__dropdown__arrow}>
                    <div className={styles.search__dropdown__arrowWrap} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainSeparator />
        <div className={styles.descriptionBlock}>
          <div className={styles.descriptionBlock__title}>
            <p className={styles.descriptionBlock__title__topTitle}>We&#39;re leaders in</p>
            <p className={styles.descriptionBlock__title__bottomTitle}>
              creative digital recruitment
            </p>
          </div>
          <div className={styles.descriptionBlock__separator} />
          <div className={styles.descriptionBlock__shortDescription}>
            Based in Surry Hills, the creative hub of Sydney we are surrounded by creativity
            {'\n'}
            and that reflects on the type of jobs we recruit for.
          </div>
          <div className={styles.descriptionBlock__aboutUsBtn}>
            find out more about us!
          </div>
        </div>
        <MainSeparator />
        <div className={styles.subscribeBlock}>
          <div className={styles.subscribeBlock__title}>
            Subscribe to our Job Seeker Mailing List
          </div>
          <div className={styles.subscribeBlock__sendEmail}>
            <input type="text" placeholder="Enter Your Email Address" className={styles.subscribeBlock__sendEmail__input} />
            <div className={styles.subscribeBlock__sendEmail__btn} style={{ backgroundImage: `URL(${MailIcon})` }} />
          </div>
        </div>
        <MainSeparator />
        <div className={styles.footer}>
          <div className={styles.footer__mailInformation}>
            <div className={styles.footer__mailInformation__mailIcon} style={{ backgroundImage: `URL(${MailIconBlue})` }} />
            <p className={styles.footer__mailInformation__mailAddress}>hello@twobytes.com.au</p>
          </div>
          <div className={styles.footer__container}>
            <p className={styles.footer__container__copyright}>
              Copyright &copy; 2014 Two Bytes Consulting.
              <strong> Terms &#38; Policies.</strong>
            </p>
            <div className={styles.footer__social}>
              <div className={styles.footer__social__item}>
                <div className={styles.footer__social__icon} style={{ backgroundImage: `URL(${TwitterLike})` }} />
                <div className={styles.footer__social__likes}>
                  234
                </div>
              </div>
              <div className={styles.footer__social__item}>
                <div className={styles.footer__social__icon} style={{ backgroundImage: `URL(${FacebookLike})` }} />
                <div className={styles.footer__social__likes}>
                  234
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TwoBytes;
