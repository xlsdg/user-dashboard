import React from 'react';
import Moment from 'moment';
import {
  Link
} from 'dva/router';

import Cfg from '../../config.js';

import styles from './footer.less';

function Footer() {
  function renderLink() {
    const online = 1;
    const top = 2;

    return (
      <ul className={`fn-clear ${styles.listWrap}`}>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >关于</Link>
        </li>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >FAQ</Link>
        </li>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >API</Link>
        </li>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >我们的愿景</Link>
        </li>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >广告投放</Link>
        </li>
        <li className={styles.liWrap}>
          <Link
            className={styles.linkWrap}
            to="/"
          >鸣谢</Link>
        </li>
        <li className={styles.liWrap}>
          <span
            className={styles.onlineWrap}
          >{online} 人在线</span>
          <span
            className={styles.topWrap}
          >最高记录 {top}</span>
        </li>
      </ul>
    );
  }

  function renderCnInfo() {
    return (
      <p
        className={styles.cnWrap}
      >创意工作者们的社区</p>
    );
  }

  function renderEnInfo() {
    return (
      <p
        className={styles.enWrap}
      >World is powered by solitude</p>
    );
  }

  function renderVer() {
    const utc = Moment().utcOffset(0).format('HH:mm');
    const pvg = Moment().utcOffset(8).format('HH:mm');
    const lax = Moment().utcOffset(-7).format('HH:mm');
    const jfk = Moment().utcOffset(-4).format('HH:mm');

    if (!window._end_time_stamp) {
      window._end_time_stamp = (new Date()).getTime();
    }

    const time = window._end_time_stamp - window._start_time_stamp;

    return (
      <p
        className={styles.verWrap}
      >{`VERSION: ${Cfg.version} · ${time}ms · UTC ${utc} · PVG ${pvg} · LAX ${lax} · JFK ${jfk}`}</p>
    );
  }

  function renderLove() {
    return (
      <p
        className={styles.loveWrap}
      >♥ Do have faith in what you are doing.</p>
    );
  }

  function renderIcp() {
    return (
      <p className={styles.icpWrap}>
        <a
          href="//www.miibeian.gov.cn/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >{Cfg.icp}</a>
      </p>
    );
  }

  function renderLeft() {
    return (
      <div className={`fn-left ${styles.leftWrap}`}>
        {renderLink()}
        {renderCnInfo()}
        {renderEnInfo()}
        {renderVer()}
        {renderLove()}
        {renderIcp()}
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
