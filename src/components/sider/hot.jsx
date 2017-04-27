import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card
} from 'antd';

import styles from './hot.less';

function Hot() {
  const style = {
    width: '100%',
    height: 200
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

// Hot.propTypes = {
// };

export default Hot;
