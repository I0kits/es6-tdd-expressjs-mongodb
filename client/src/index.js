import dva from 'dva';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.less';
import router from './router';

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});


// 3. Router
app.router(router);

// 4. Start
app.start('#root');
