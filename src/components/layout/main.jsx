import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, BackTop
} from 'antd';

import IHeader from './header.jsx';
import IFooter from './footer.jsx';

import styles from './main.less';

const {
  Header, Content, Footer
} = Layout;

function Main({
  children, location
}) {
  return (
    <Layout className={styles.mainWrap}>
      <Header className={styles.headerWrap}>
        <IHeader location={location} />
      </Header>
      <Content className={styles.contentWrap}>
        <div className={`fn-clear ${styles.bodyWrap}`}>
          {children}
        </div>
        <BackTop />
      </Content>
      <Footer className={styles.footerWrap}>
        <IFooter />
      </Footer>
    </Layout>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
