import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/main.jsx';

function RouterConfig({
  history
}) {
  const Index = (loc, cb) => require.ensure([], require => cb(null, require('./routes/index.jsx')));
  const Signup = (loc, cb) => require.ensure([], require => cb(null, require('./routes/signup.jsx')));
  const Signin = (loc, cb) => require.ensure([], require => cb(null, require('./routes/signin.jsx')));
  const Forgot = (loc, cb) => require.ensure([], require => cb(null, require('./routes/forgot.jsx')));

  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" getComponent={Index} />
        <Route path="/signup" getComponent={Signup} />
        <Route path="/signin" getComponent={Signin} />
        <Route path="/forgot" getComponent={Forgot} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
