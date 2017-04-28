import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './user_forgot.less';

function UserForgot() {
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
    >User forgot</Block>
  );
}

// UserForgot.propTypes = {
// };

export default UserForgot;
