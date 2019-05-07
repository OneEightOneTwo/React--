import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import mobile from './components/mobile/mobile';
import login from './components/login/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/mobile" exact component={mobile} />
        <Route path="/login" exact component={login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
