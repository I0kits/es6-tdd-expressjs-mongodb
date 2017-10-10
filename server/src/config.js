import path from 'path';
import env from 'getenv';

const baseDir = path.join(__dirname, '..', '..');

const conf = {
  port: 3000,
  home: baseDir,

  logLevel: 'debug', //from pino: 'fatal', 'error', 'warn', 'info', 'debug', 'trace'; 'silent'
  logPath: path.join(baseDir, 'logs'),

  dbUser: 'peacock',
  dbName: 'peacock',
  dbPass: 'ZhQPz5h9uVT2vHgS',
  dbParams: 'ssl=true&replicaSet=peacock-shard-0&authSource=admin',
  dbHosts: 'peacock-shard-00-00-cfrmo.mongodb.net,peacock-shard-00-01-cfrmo.mongodb.net,peacock-shard-00-02-cfrmo.mongodb.net'
};

export default {
  port: env.int('port', conf.port),
  home: env.string('HOME_DIR', conf.home),
  dbUser: env.string('DB_USER', conf.dbUser),
  dbName: env.string('DB_NAME', conf.dbName),
  dbPass: env.string('DB_PASS', conf.dbPass),
  dbHosts: env.string('DB_HOSTS', conf.dbHosts),
  logPath: env.string('LOG_PATH', conf.logPath),
  dbParams: env.string('DB_PARAMS', conf.dbParams),
  logLevel: env.string('LOG_LEVEL', conf.logLevel),
};
