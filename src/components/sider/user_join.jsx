import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Button
} from 'antd';

import Block from '../common/block.jsx';

import styles from './user_join.less';

function UserJoin() {
  function renderHeader() {
    return (
      <div
        className={styles.headerWrap}
      >
        <p
          className={styles.titleWrap}
        >V2EX = way to explore</p>
        <p
          className={styles.subTitleWrap}
        >V2EX 是一个关于分享和探索的地方</p>
      </div>
    );
  }

  return (
    <Block
      header={renderHeader()}
    >
      <div className={styles.bodyWrap}>
        <p className={styles.infoWrap}>
          <Button
            type="primary"
          >现在注册</Button>
        </p>
        <p
          className={styles.infoWrap}
        >已注册用户请 <Link to="/">登录</Link></p>
      </div>
    </Block>
  );
}

// UserJoin.propTypes = {
// };

export default UserJoin;
