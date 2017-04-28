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

import ContentUserSignup from '../components/content/user_signup.jsx';

import SiderUserSignin from '../components/sider/user_signin.jsx';

import styles from './signup.less';

function Signup({
  location
}) {
  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <ContentUserSignup />
      </div>
    );
  }

  function renderSider() {
    return (
      <div className={styles.siderWrap}>
        <SiderUserSignin />
      </div>
    );
  }

  return (
    <div className={styles.mainWrap}>
      <Helmet>
        <title>{`${Cfg.name} › 注册`}</title>
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

Signup.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Signup);
