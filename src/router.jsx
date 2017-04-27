import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/main.jsx';

import Index from './routes/index.jsx';

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
