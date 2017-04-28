import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Breadcrumb
} from 'antd';

import Block from '../common/block.jsx';

import ForgotForm from '../user/forgot.jsx';

import styles from './user_forgot.less';

function UserForgot({
  onForgot
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
        <Breadcrumb.Item>
          <Link to="/signin">登录</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>重设密码</Breadcrumb.Item>
      </Breadcrumb>
    );
  }

  function renderInfo() {
    return (
      <div className={styles.infoWrap} />
    );
  }

  function renderForm() {
    return (
      <div className={styles.formWrap}>
        <ForgotForm onForgot={onForgot} />
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

UserForgot.propTypes = {
  onForgot: PropTypes.func.isRequired
};

UserForgot.defaultProps = {
};

export default UserForgot;
