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

import PostList from '../components/content/post_list.jsx';
import TagNav from '../components/content/tag_nav.jsx';

import UserSignin from '../components/sider/user_signin.jsx';
import HotPost from '../components/sider/hot_post.jsx';
import HotTag from '../components/sider/hot_tag.jsx';
import NewTag from '../components/sider/new_tag.jsx';
import Status from '../components/sider/status.jsx';

import styles from './index.less';

function Index({
  location
}) {
  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        <PostList />
        <TagNav />
      </div>
    );
  }

  function renderSider() {
    return (
      <div className={styles.siderWrap}>
        <UserSignin />
        <HotPost />
        <HotTag />
        <NewTag />
        <Status />
      </div>
    );
  }

  return (
    <Main location={location}>
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
    </Main>
  );
}

Index.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Index);
