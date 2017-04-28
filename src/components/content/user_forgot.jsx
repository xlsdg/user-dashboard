import React from 'react';
import PropTypes from 'prop-types';

import Block from '../common/block.jsx';

import styles from './user_forgot.less';

function UserForgot({
  onForgot
}) {
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

UserForgot.propTypes = {
  onForgot: PropTypes.func.isRequired
};

UserForgot.defaultProps = {
};

export default UserForgot;
