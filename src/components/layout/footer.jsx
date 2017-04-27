import React from 'react';
// import {
//   Link
// } from 'dva/router';

import styles from './footer.less';

function Footer() {
  function renderLeft() {
    return (
      <div className={`fn-left ${styles.leftWrap}`}>
        <p
          className={styles.cnWrap}
        >创意工作者们的社区</p>
        <p
          className={styles.enWrap}
        >World is powered by solitude</p>
        <p
          className={styles.verWrap}
        >VERSION: 3.9.7.5 · 26ms · UTC 01:12 · PVG 09:12 · LAX 18:12 · JFK 21:12</p>
        <p
          className={styles.loveWrap}
        >♥ Do have faith in what you are doing.</p>
        <p className={styles.icpWrap}>
          <a
            href="//www.miibeian.gov.cn/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >沪ICP备12345678号-1</a>
        </p>
      </div>
    );
  }

  function renderRight() {
    return (
      <div className={`fn-right ${styles.rightWrap}`}>
        <a
          href="//www.digitalocean.com/?refcode=1b51f1a7651d"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            src="//v2ex.assets.uxengine.net/assets/logos/do_blue.png"
            width="60"
            alt="DigitalOcean"
          />
        </a>
      </div>
    );
  }

  return (
    <footer className={`fn-clear ${styles.mainWrap}`}>
      {renderLeft()}
      {renderRight()}
    </footer>
  );
}

export default Footer;
