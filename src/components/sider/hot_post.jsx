import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './hot_post.less';

function HotPost() {
  function renderHeader() {
    return (
      <div
        className={styles.headerWrap}
      >123</div>
    );
  }

  return (
    <Block
      header={renderHeader()}
    >456</Block>
  );
}

// HotPost.propTypes = {
// };

export default HotPost;
