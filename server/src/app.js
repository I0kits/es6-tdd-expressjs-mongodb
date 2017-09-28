import path from 'path';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import fallback from 'express-history-api-fallback'

import webserver from './utils/webserver';

const www = path.join(__dirname, '../../www');
const app = express();

app.use(compression());
app.use(morgan('combined'));
app.use(express.static(www));
app.use(fallback('index.html', { root: www }));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

webserver.run(app);
