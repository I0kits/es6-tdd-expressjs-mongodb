import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import enUS from 'antd/lib/locale-provider/en_US';

import { Layout, LocaleProvider } from 'antd';

import { facts } from './models/facts';

import NotFound from './components/NotFound';
import Header from './components/Header/Header';
import Template from './components/Template/Template';

import Index from './routes/Index.js';
import Schedule from './routes/Schedule';
import './index.scss';


function RouterConfig({ history, app }) {
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
                    <Route exact path="/" component={FactsContainer} />
                    <Route exact path="/schedule" component={Schedule} />
                    <Route exact path="/template" component={Template} />
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
