import React from 'react';
// import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './user_signup.less';

function UserSignup() {
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
    >User signup</Block>
  );
}

// UserSignup.propTypes = {
// };

export default UserSignup;
