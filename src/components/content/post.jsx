import React from 'react';
// import PropTypes from 'prop-types';
import {
  Card
} from 'antd';

import styles from './nav.less';

function Post() {
  const style = {
    width: '100%',
    height: 512
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

// Post.propTypes = {
// };

export default Post;
