import winston from 'winston';
import config from '../config';

const formatter = (opts) =>{
  const msg = opts.message || '';
  return `${opts.timestamp()} [${opts.level.toUpperCase()}] ${msg}`;
};

const logger = new winston.Logger({
  level: config.logLevel,
  transports: [
    new (winston.transports.Console)({
      formatter,
      timestamp: () => new Date().toISOString(),
    }),
  ],
});

export default logger;
