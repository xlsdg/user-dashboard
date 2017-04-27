import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card
} from 'antd';

import styles from './status.less';

function Status() {
  const style = {
    width: '100%',
    height: 300
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

// Status.propTypes = {
// };

export default Status;
