import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import fallback from 'express-history-api-fallback';

import config from './config';
import mogran from './utils/morgan';
import mongoose from './utils/mongoose';
import webserver from './utils/webserver';

const staticPath = path.join(__dirname, '../../www');
const faviconPath = path.join(__dirname, '../static');

const mongodb = mongoose.init(
  config.dbHosts, config.dbName,
  config.dbUser, config.dbPass, config.dbParams
);

const app = express();
app.use(compression());
app.use(mogran.create());
app.use(express.static(staticPath));
app.use(fallback('index.html', {root: staticPath}));
app.use(favicon(path.join(faviconPath, 'favicon.ico')));

const server = webserver.run(app);

server.onSigint((cb) => {
  server.close(() => {
    mongodb.disconnect((err) => {
      cb(err);
    });
  });
});
