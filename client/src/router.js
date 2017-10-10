import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import enUS from 'antd/lib/locale-provider/en_US';

import { Layout, LocaleProvider } from 'antd';

import { users } from './models/users';
import { facts } from './models/facts';

import NotFound from './components/NotFound';
import Header from './components/Header/Header';

import Index from './routes/Index.js';
import Users from './routes/Users';
import './index.scss';


function RouterConfig({ history, app }) {
  const UsersContainer = dynamic({
    app,
    models: () => [users],
    component: () => Users,
  });

  const FactsContainer = dynamic({
    app,
    models: () => [facts],
    component: () => Index,
  });
  return (
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Layout className="page-wrapper">
          <Layout.Header>
            <div className="container">
              <header>
                <Switch>
                  <Route path="/*" component={Header} />
                </Switch>
              </header>
            </div>
          </Layout.Header>
          <Layout.Content>
            <div className="container">
              <main>
                <div className="main-wrapper">
                  <Switch>
                    <Route exact path="/users" component={UsersContainer} />
                    <Route exact path="/" component={FactsContainer} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </main>
            </div>

          </Layout.Content>
        </Layout>
      </Router>
    </LocaleProvider>
  );
}


export default RouterConfig;
