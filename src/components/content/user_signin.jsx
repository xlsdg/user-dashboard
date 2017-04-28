import React from 'react';
// import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Breadcrumb, Alert
} from 'antd';

import Block from '../common/block.jsx';

import styles from './user_signin.less';

function UserSignin() {
  function renderHeader() {
    return (
      <Breadcrumb
        className={styles.headerWrap}
        separator=">"
      >
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>登录</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function renderInfo() {
    return (
      <Alert
        message="你要查看的页面需要先登录"
        type="info"
        closable
      />
    );
  }

  function renderBody() {
    return (
      <div className={styles.bodyWrap}>
        {renderInfo()}
      </div>
    );
  }

  return (
    <Block
      header={renderHeader()}
    >{renderBody()}</Block>
  );
}

// UserSignin.propTypes = {
// };

export default UserSignin;
