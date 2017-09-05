import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Switch, Route
} from 'dva/router';
import Dynamic from 'dva/dynamic';


function RouterConfig({
  history, app
}) {
  const Index = Dynamic({
    app,
    component: () => import('./routes/index')
  });
  const Signup = Dynamic({
    app,
    component: () => import('./routes/signup')
  });
  const Signin = Dynamic({
    app,
    component: () => import('./routes/signin')
  });
  const Forgot = Dynamic({
    app,
    component: () => import('./routes/forgot')
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/forgot" component={Forgot} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
