import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card
} from 'antd';

import styles from './join.less';

function Join() {
  const style = {
    width: '100%',
    height: 100
  };

  const bodyStyle = {
    padding: 0
  };

  return (
    <Card
      bordered={false}
      style={style}
      bodyStyle={bodyStyle}
    >234</Card>
  );
}

// Join.propTypes = {
// };

export default Join;
