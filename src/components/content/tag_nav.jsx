import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './tag_nav.less';

function TagNav() {
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

// TagNav.propTypes = {
// };

export default TagNav;
