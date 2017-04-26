import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/main.js';

import Index from './routes/index.js';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Index} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
