import path from 'path';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';

// import webserver from './utils/webserver';


const app = express();
// const server = webserver.run(app);

app.use(compression());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../www')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));


