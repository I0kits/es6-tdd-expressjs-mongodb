import path from 'path';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import fallback from 'express-history-api-fallback';

import config from './config';
import mongoose from './utils/mongoose';
import webserver from './utils/webserver';

const staticPath = path.join(__dirname, '../../www');
const faviconPath = path.join(__dirname, '../static');

const app = express();
const mongodb = mongoose.init(config.dbHosts, config.dbName, config.dbUser, config.dbPass, config.dbParams);

//TODO: close db connection when app shutdown.

app.use(compression());
app.use(morgan('combined'));
app.use(express.static(staticPath));
app.use(fallback('index.html', {root: staticPath}));
app.use(favicon(path.join(faviconPath, 'favicon.ico')));

webserver.run(app);

process.on('SIGINT', function() {
  mongodb.disconnect(function(err) {
    process.exit(err ? 1 : 0);
  });
});
