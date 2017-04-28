import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Breadcrumb, Alert
} from 'antd';

import Block from '../common/block.jsx';

import SigninForm from '../user/signin.jsx';

import styles from './user_signin.less';

function UserSignin({
  onSignin
}) {
  function renderHeader() {
    return (
      <Breadcrumb
        className={styles.headerWrap}
        separator="›"
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
      <div className={styles.infoWrap}>
        <Alert
          message="你要查看的页面需要先登录"
          type="info"
          closable
        />
      </div>
    );
  }

  function renderForm() {
    return (
      <div className={styles.formWrap}>
        <SigninForm onSignin={onSignin} />
      </div>
    );
  }

  function renderBody() {
    return (
      <div className={styles.bodyWrap}>
        {renderInfo()}
        {renderForm()}
      </div>
    );
  }

  return (
    <Block
      header={renderHeader()}
    >{renderBody()}</Block>
  );
}

UserSignin.propTypes = {
  onSignin: PropTypes.func.isRequired
};

UserSignin.defaultProps = {
};

export default UserSignin;
