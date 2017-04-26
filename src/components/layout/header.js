import React from 'react';
import PropTypes from 'prop-types';
import {
  Input
} from 'antd';

import styles from './header.css';

const Search = Input.Search;

function Header({
  location
}) {
  const style = {
    search: {
      width: '276px',
      'vertical-align': 'top'
    }
  };

  return (
    <header className={`fn-clear ${styles.mainWrap}`}>
      <div className={`fn-left ${styles.leftWrap}`}>
        <span className={styles.logoWrap}>BBS</span>
        <Search
          style={style.search}
          onSearch={value => console.log(value)}
        />
      </div>
      <div className={`fn-right ${styles.rightWrap}`}>
        reg
      </div>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
