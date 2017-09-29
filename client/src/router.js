import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import Users from './routes/Users';
import { users } from './models/users';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';

function RouterConfig({ history, app }) {
  const UsersContainer = dynamic({
    app,
    models: () => [users],
    component: () => Users,
  });
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/users" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/users" component={UsersContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default RouterConfig;
