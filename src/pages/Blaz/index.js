import React from 'react';

import Download from 'components/Blaz/Download';

import Layer from 'img/Blaz/layer.png';
import Layer12 from 'img/Blaz/layer12.png';
import DownloadLayer from 'img/Blaz/download-layer.png';
import Theme from 'img/Blaz/Theme.png';
import Dot from 'img/Blaz/Dot.png';
import Rss from 'img/Blaz/rss2.svg';
import Mail from 'img/Blaz/mail2.svg';
import Twitter from 'img/Blaz/twitter2.svg';
import Loupe from 'img/Blaz/loupe.svg';

import styles from './style.scss';

const Blaz = () => {
  return (
    <div className={styles.root} style={{ backgroundImage: `URL(${Layer})` }}>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.logo__name} style={{ backgroundImage: `URL(${Theme})` }} />
            <div className={styles.logo__dot} style={{ backgroundImage: `URL(${Dot})` }} />
          </div>
          <div className={styles.header__content}>
            <div className={styles.menu}>
              <div className={styles.menu__item}>Home</div>
              <div className={styles.menu__item}>Free Downloads</div>
              <div className={styles.menu__item}>About</div>
              <div className={styles.menu__item}>Blog</div>
              <div className={styles.menu__item}>Licening</div>
              <div className={styles.menu__item}>Contact</div>
            </div>
            <div className={styles.social}>
              <div className={styles.social__item}>
                <div className={styles.social__item__icon} style={{ backgroundImage: `URL(${Mail})` }} />
              </div>
              <div className={styles.social__item}>
                <div className={styles.social__item__icon} style={{ backgroundImage: `URL(${Rss})` }} />
              </div>
              <div className={styles.social__item}>
                <div className={styles.social__item__icon} style={{ backgroundImage: `URL(${Twitter})` }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.banner} style={{ backgroundImage: `URL(${Layer12})` }} />

        <div className={styles.title}>Latest Downloads</div>
        <div className={styles.downloadsList}>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
          <div className={styles.downloadsList__item}>
            <div className={styles.downloadsList__item__pic} style={{ backgroundImage: `URL(${DownloadLayer})` }}>
              <div className={styles.downloadsList__item__plus} />
            </div>
            <div className={styles.downloadsList__item__name}>PSD Ribbon Set</div>
          </div>
        </div>

        <div className={styles.informationBlock}>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>Find Something</div>
            <div className={styles.informationBlock__text}>
              All files on this website are Free.
              Download and use these files for your commercial or personal projects.
            </div>
            <div className={styles.inputBlock}>
              <input type="text" placeholder="Looking for Something?" className={styles.inputFind} />
              <div className={styles.btnFind}>go</div>
            </div>
          </div>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>About Your Business Here</div>
            <div className={styles.informationBlock__text}>
              Over the years, I have benefited from hundreds of free online graphic
              design resources including PSD files,
              which have been generously shared by a thriving online design community.
              BlazRobar.com is a way for me to give back to this community.
            </div>
          </div>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>
              Search by
              <div className={styles.searchLoupe} style={{ backgroundImage: `URL(${Loupe})` }} />
            </div>
            <div className={styles.categories}>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>+1 Icon </span>
                (3)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Add detail to your </span>
                (1)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Buttons </span>
                (10)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Call to Action </span>
                (19)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean </span>
                (6)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean and Simple </span>
                (13)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Image Slider </span>
                (9)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean Table Design </span>
                (7)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>CSS PSD </span>
                (32)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>+1 Icon </span>
                (3)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Add detail to your </span>
                (1)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Buttons </span>
                (10)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Call to Action </span>
                (19)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean </span>
                (6)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean and Simple </span>
                (13)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Image Slider </span>
                (9)
              </div>
            </div>
          </div>
        </div>
        <div className={styles.title}>Other (just as good) Downloads</div>
        <div className={styles.otherDownloadsList}>
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
        </div>
        <div className={styles.informationBlock}>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>Find Something</div>
            <div className={styles.informationBlock__text}>
              All files on this website are Free.
              Download and use these files for your commercial or personal projects.
            </div>
            <div className={styles.inputBlock}>
              <input type="text" placeholder="Looking for Something?" className={styles.inputFind} />
              <div className={styles.btnFind}>go</div>
            </div>
          </div>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>About Your Business Here</div>
            <div className={styles.informationBlock__text}>
              Over the years, I have benefited from hundreds of free online graphic
              design resources including PSD files,
              which have been generously shared by a thriving online design community.
              BlazRobar.com is a way for me to give back to this community.
            </div>
          </div>
          <div className={styles.informationBlock__item}>
            <div className={styles.informationBlock__title}>
              Search by
              <div className={styles.searchLoupe} style={{ backgroundImage: `URL(${Loupe})` }} />
            </div>
            <div className={styles.categories}>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>+1 Icon </span>
                (3)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Add detail to your </span>
                (1)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Buttons </span>
                (10)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Call to Action </span>
                (19)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean </span>
                (6)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean and Simple </span>
                (13)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Image Slider </span>
                (9)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean Table Design </span>
                (7)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>CSS PSD </span>
                (32)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>+1 Icon </span>
                (3)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Add detail to your </span>
                (1)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Buttons </span>
                (10)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Call to Action </span>
                (19)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean </span>
                (6)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Clean and Simple </span>
                (13)
              </div>
              <div className={styles.categories__item}>
                <span className={styles.categories__item__name}>Image Slider </span>
                (9)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blaz;
