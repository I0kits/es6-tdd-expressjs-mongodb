import dva from 'dva';
import React from 'react';
import './index.css';
import Users from './models/users';
import RouteConfig from './router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

// 1. Initialize
const app = dva();

registerModel(app, Users);

// 3. Router
app.router(RouteConfig);

// 4. Start
app.start('#root');
