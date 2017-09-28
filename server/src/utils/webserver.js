// import fs from 'fs';
// import path from 'path';
// import path from 'path';

import http from 'http';
import https from 'https';

import logger from './logger';

const util = {
  parsePort: (input) => {
    const port = parseInt(input, 10);
    return isNaN(port) ? input : port >= 0 ? port : false;
  },

  parseServerAddress: (addr) => {
    return typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  },

  parseHttpServerError: (error, port) => {
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
      case 'EACCES':
        return bind + ' requires elevated privileges';
      case 'EADDRINUSE':
        return bind + ' is already in use';
      default:
        throw error;
    }
  },
};


const registerEventHandlers = (server, opts) => {
  server.on('listening', () => {
    const serverTypes = opts.https ? 'https' : 'http';
    logger.info('The %s server running on: ', serverTypes, server.address());
  });

  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    logger.error(util.parseHttpServerError(error, PORT));
  });

  server.on('close', () => {
    logger.info('The web server be closed.');
  });

  return server;
};

const defaultOptions = {
  https: false,
  port: util.parsePort(process.env.port || '3000'),
};

export default {
  run: (app, opts = {}) => {
    opts = Object.assign({}, defaultOptions, opts);

    let server;
    if (opts.https) {
      server = https.createServer(loadHttpsConfig(opts), app);
    } else {
      server = http.createServer(app);
    }

    registerEventHandlers(server, opts).listen(opts.port);

    process.on('beforeExit', ()=> {
      logger.info('the server will be close.');
      graceful.gracefulExitHandler(app, server, {});
    });

    return server;
  },
};
