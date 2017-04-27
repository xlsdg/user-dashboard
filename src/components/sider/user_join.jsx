import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './user_join.less';

function UserJoin() {
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

// UserJoin.propTypes = {
// };

export default UserJoin;
