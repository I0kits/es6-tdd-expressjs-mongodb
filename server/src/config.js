import path from 'path';
import env from 'getenv';

const baseDir = path.join(__dirname, '..', '..');

const static_config = {
  port: 3000,
  home: baseDir,

  logLevel: 'debug',
  logPath: path.join(baseDir, 'logs'),

  dbUser: 'peacock',
  dbName: 'peacock',
  dbPass: 'ZhQPz5h9uVT2vHgS',
  dbParams: 'ssl=true&replicaSet=peacock-shard-0&authSource=admin',
  /* eslint-disable */
  dbHosts: 'peacock-shard-00-00-cfrmo.mongodb.net,peacock-shard-00-01-cfrmo.mongodb.net,peacock-shard-00-02-cfrmo.mongodb.net',
  /* eslint-enable */
};

const dynamic_config = require('config');

export default {
  port: env.int('port', static_config.port),
  home: env.string('HOME_DIR', static_config.home),
  dbUser: env.string('DB_USER', dynamic_config.dbUser),
  dbName: env.string('DB_NAME', dynamic_config.dbName),
  dbPass: env.string('DB_PASS', dynamic_config.dbPass),
  dbHosts: env.string('DB_HOSTS', dynamic_config.dbHosts),
  logPath: env.string('LOG_PATH', static_config.logPath),
  dbParams: env.string('DB_PARAMS', dynamic_config.dbParams),
  logLevel: env.string('LOG_LEVEL', static_config.logLevel),
};
