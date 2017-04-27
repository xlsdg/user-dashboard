import React from 'react';
import PropTypes from 'prop-types';
import {
  Card
} from 'antd';

import styles from './block.less';

function Block({
  header, footer, children, style, bodyStyle
}) {
  function renderHeader() {
    if (!header) {
      return null;
    }
    return (
      <div
        className={styles.headerWrap}
      >{header}</div>
    );
  }

  function renderFooter() {
    if (!footer) {
      return null;
    }
    return (
      <div
        className={styles.footerWrap}
      >{footer}</div>
    );
  }

  return (
    <Card
      style={style}
      bodyStyle={bodyStyle}
      bordered={false}
    >
      {renderHeader()}
      {children}
      {renderFooter()}
    </Card>
  );
}

Block.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  style: PropTypes.object,
  bodyStyle: PropTypes.object
};

Block.defaultProps = {
  header: null,
  footer: null,
  style: {
    width: '100%'
  },
  bodyStyle: {
    padding: 0
  }
};

export default Block;
