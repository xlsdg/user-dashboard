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

import ContentUserSignin from '../components/content/user_signin.jsx';

import SiderUserSignin from '../components/sider/user_signin.jsx';

import styles from './signin.less';

function Signin({
  location
}) {
  function onSignin(values) {
    console.log(values);
  }

  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <ContentUserSignin onSignin={onSignin} />
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
          <title>{`${Cfg.name} › 登录`}</title>
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

Signin.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Signin);
