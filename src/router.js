import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Goodsdetail from "./routes/Goodsdetail/Goodsdetail";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Goodsdetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
