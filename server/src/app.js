import path from 'path';
import fastify from 'fastify';
import fastifyShutdown from 'fastify-graceful-shutdown';
import fastifyHistoryApiSupport from './plugins/browser-history-api-support';

import config from './config';
import mongoose from './utils/mongoose';

const mongodb = mongoose.init(config.dbHosts, config.dbName, config.dbUser, config.dbPass, config.dbParams);

const app = fastify({
  //https: {},
  logger: {level: config.logLevel}
});

app.register(fastifyHistoryApiSupport, {
  file: 'index.html',
  path: path.join(__dirname, '../../www')
});

app.register(fastifyShutdown);

app.get('/hello', async function(req, res){
  console.log(req.accepts('html'))
  console.log(res.sendFile);
  console.log(req.type('html'));
  return "data";
});

app.listen(config.port, (err) =>{
  if (err) throw err;
  app.logger.info('The web server running on: %s:%s', app.server.address().address, app.server.address().port);
});

app.addHook('onClose', (instance, done) =>{
  app.logger.info('Stopping the web server...:');
  mongodb.disconnect(() =>{
    app.logger.info('The web server be closed.');
    done();
  })
});
