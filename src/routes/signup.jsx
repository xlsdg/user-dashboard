import React from 'react';
import PropTypes from 'prop-types';
import {
  Helmet
} from 'react-helmet';
import {
  connect
} from 'dva';

import Main from '../components/layout/main.jsx';

import Cfg from '../config.js';

import Body from '../components/layout/body.jsx';

import ContentUserSignup from '../components/content/user_signup.jsx';

import SiderUserSignin from '../components/sider/user_signin.jsx';

import styles from './signup.less';

function Signup({
  location
}) {
  function onSignup(values) {
    console.log(values);
  }

  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <ContentUserSignup onSignup={onSignup} />
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
    <Main location={location}>
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
    </Main>
  );
}

Signup.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Signup);
