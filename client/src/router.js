import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import Users from './routes/Users';
import { users } from './models/users';

function RouterConfig({ history, app }) {
  const UsersContainer = dynamic({
    app,
    models: () => [users],
    component: () => Users,
  });
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/users" component={UsersContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
