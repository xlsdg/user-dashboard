import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'dva/router';
import {
  Breadcrumb
} from 'antd';

import Block from '../common/block.jsx';

import SignupForm from '../user/signup.jsx';

import styles from './user_signup.less';

function UserSignup({
  onSignup
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
        <Breadcrumb.Item>注册</Breadcrumb.Item>
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
        <SignupForm onSignup={onSignup} />
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

UserSignup.propTypes = {
  onSignup: PropTypes.func.isRequired
};

UserSignup.defaultProps = {
};

export default UserSignup;
