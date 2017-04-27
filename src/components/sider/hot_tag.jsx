import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './hot_tag.less';

function HotTag() {
  function renderHeader() {
    return (
      <div
        className={styles.headerWrap}
      >123</div>
    );
  }

  function renderFooter() {
    return (
      <div
        className={styles.footerWrap}
      >789</div>
    );
  }

  return (
    <Block
      header={renderHeader()}
      footer={renderFooter()}
    >456</Block>
  );
}

// HotTag.propTypes = {
// };

export default HotTag;
