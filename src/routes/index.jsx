import React from 'react';
import PropTypes from 'prop-types';
import {
  Helmet
} from 'react-helmet';
import {
  connect
} from 'dva';
import {
  Card
} from 'antd';

import Cfg from '../config.js';
import Body from '../components/layout/body.jsx';

import styles from './index.less';

function Index({
  location
}) {
  const bodyStyle = {
    padding: 0
  };

  function renderTopContent() {
    const style = {
      width: '100%',
      height: 512
    };

    return (
      <Card
        bordered={false}
        style={style}
        bodyStyle={bodyStyle}
      >123</Card>
    );
  }

  function renderBottomContent() {
    const style = {
      width: '100%',
      height: 256
    };

    return (
      <Card
        bordered={false}
        style={style}
        bodyStyle={bodyStyle}
      >456</Card>
    );
  }

  function renderContent() {
    return (
      <div className={styles.contentWrap}>
        {renderTopContent()}
        {renderBottomContent()}
      </div>
    );
  }

  function renderLogin() {
    const style = {
      width: '100%',
      height: 100
    };

    return (
      <Card
        bordered={false}
        style={style}
        bodyStyle={bodyStyle}
      >234</Card>
    );
  }

  function renderHot() {
    const style = {
      width: '100%',
      height: 200
    };

    return (
      <Card
        bordered={false}
        style={style}
        bodyStyle={bodyStyle}
      >234</Card>
    );
  }

  function renderStatus() {
    const style = {
      width: '100%',
      height: 300
    };

    return (
      <Card
        bordered={false}
        style={style}
        bodyStyle={bodyStyle}
      >234</Card>
    );
  }

  function renderSider() {
    return (
      <div className={styles.siderWrap}>
        {renderLogin()}
        {renderHot()}
        {renderStatus()}
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
