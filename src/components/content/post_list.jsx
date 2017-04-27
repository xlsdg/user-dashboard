import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './post_list.less';

function PostList() {
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

// PostList.propTypes = {
// };

export default PostList;
