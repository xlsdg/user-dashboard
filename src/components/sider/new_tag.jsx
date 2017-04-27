import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './new_tag.less';

function NewTag() {
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

// NewTag.propTypes = {
// };

export default NewTag;
