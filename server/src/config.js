import path from 'path';
import env from 'getenv';

const baseDir = path.join(__dirname, '..', '..');

const staticConfig = {
  port: 3000,
  home: baseDir,

  logLevel: 'debug',
  logPath: path.join(baseDir, 'logs'),
};

const dynamicConfig = require('config');

export default {
  port: env.int('port', staticConfig.port),
  home: env.string('HOME_DIR', staticConfig.home),
  dbUser: env.string('DB_USER', dynamicConfig.dbUser),
  dbName: env.string('DB_NAME', dynamicConfig.dbName),
  dbPass: env.string('DB_PASS', dynamicConfig.dbPass),
  dbHosts: env.string('DB_HOSTS', dynamicConfig.dbHosts),
  logPath: env.string('LOG_PATH', staticConfig.logPath),
  dbParams: env.string('DB_PARAMS', dynamicConfig.dbParams),
  logLevel: env.string('LOG_LEVEL', staticConfig.logLevel),
};
