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

import Post from '../components/content/post.jsx';
import Nav from '../components/content/nav.jsx';

import Join from '../components/sider/join.jsx';
import Hot from '../components/sider/hot.jsx';
import Status from '../components/sider/status.jsx';

import styles from './index.less';

function Index({
  location
}) {
  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <Post />
        <Nav />
      </div>
    );
  }

  function renderSider() {
    return (
      <div className={styles.siderWrap}>
        <Join />
        <Hot />
        <Status />
      </div>
    );
  }

  return (
    <div className={styles.mainWrap}>
      <Helmet>
        <title>{Cfg.name}</title>
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

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
