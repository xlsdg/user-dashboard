import React from 'react';
import PropTypes from 'prop-types';
import {
  Helmet
} from 'react-helmet';
import {
  connect
} from 'dva';

import Cfg from '../config.js';

import Body from '../components/layout/body.jsx';

import UserForgot from '../components/content/user_forgot.jsx';

import UserSignin from '../components/sider/user_signin.jsx';

import styles from './forgot.less';

function Forgot({
  location
}) {
  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <UserForgot />
      </div>
    );
  }

  function renderSider() {
    return (
      <div className={styles.siderWrap}>
        <UserSignin />
      </div>
    );
  }

  return (
    <div className={styles.mainWrap}>
      <Helmet>
        <title>{`${Cfg.name} › 重设密码`}</title>
        <meta name="keywords" content={Cfg.keywords} />
        <meta name="description" content={Cfg.description} />
      </Helmet>
      <Body
        content={renderContent()}
        sider={renderSider()}
      />
    </div>
  );
}

Forgot.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Forgot);
