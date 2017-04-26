import React from 'react';

import styles from './footer.css';

function Footer() {
  return (
    <footer className={`fn-clear ${styles.mainWrap}`}>
      <div className={`fn-left ${styles.leftWrap}`}>
        Ant Design ©2016 Created by Ant UED
      </div>
      <div className={`fn-right ${styles.rightWrap}`}>
        xLsDg
      </div>
    </footer>
  );
}

export default Footer;
