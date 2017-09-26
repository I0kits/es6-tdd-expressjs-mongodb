import dva from 'dva';
import './index.css';
import { user } from './models/users';
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

registerModel(app, user);

// 3. Router
app.router(RouteConfig);

// 4. Start
app.start('#root');
