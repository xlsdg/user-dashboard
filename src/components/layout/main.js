import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, BackTop
} from 'antd';

// import Header from './header';
// import Footer from './footer';

import styles from './main.css';

const {
  Header, Content, Footer
} = Layout;

function Main({
  children, location
}) {
  return (
    <Layout className={styles.mainWrap}>
      <Header className={styles.headerWrap}>
        Header
      </Header>
      <Content className={styles.contentWrap}>
        {children}
        <BackTop />
      </Content>
      <Footer className={styles.footerWrap}>
        Footer
      </Footer>
    </Layout>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
