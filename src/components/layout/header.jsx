import React from 'react';
import PropTypes from 'prop-types';
import {
  Input
} from 'antd';
import {
  Link
} from 'dva/router';

import styles from './header.less';

const Search = Input.Search;

function Header({
  location
}) {
  const style = {
    search: {
      width: 276,
      verticalAlign: 'top'
    }
  };

  function renderLeft() {
    return (
      <div className={`fn-left ${styles.leftWrap}`}>
        <Link
          className={styles.logoWrap}
          to="/"
        >V2EX</Link>
        <Search
          style={style.search}
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }

  function renderRight() {
    return (
      <div className={`fn-right ${styles.rightWrap}`}>
        <Link
          className={styles.btnWrap}
          to="/signup"
        >注册</Link>
        <Link
          className={styles.btnWrap}
          to="/signin"
        >登录</Link>
      </div>
    );
  }

  return (
    <header className={`fn-clear ${styles.mainWrap}`}>
      {renderLeft()}
      {renderRight()}
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
