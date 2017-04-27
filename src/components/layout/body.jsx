import React from 'react';
import PropTypes from 'prop-types';

import styles from './body.less';

function Body({
  content, sider
}) {
  function renderLeft() {
    return (
      <div
        className={`fn-left ${styles.leftWrap}`}
      >{content}</div>
    );
  }

  function renderRight() {
    return (
      <div
        className={`fn-left ${styles.rightWrap}`}
      >{sider}</div>
    );
  }

  return (
    <div className={`fn-clear ${styles.mainWrap}`}>
      {renderLeft()}
      {renderRight()}
    </div>
  );
}

Body.propTypes = {
  content: PropTypes.element.isRequired,
  sider: PropTypes.element.isRequired
};

export default Body;
