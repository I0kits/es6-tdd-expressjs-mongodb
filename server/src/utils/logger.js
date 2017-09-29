import winston from 'winston';
import config from '../config';

const logger = new winston.Logger({
  level: config.logLevel,
  transports: [
    new (winston.transports.Console)({
      colorize: config.logColorize,
      timestamp: () => new Date().toISOString(),
      formatter: (opts) => {
        return `${opts.timestamp()} [${opts.level.toUpperCase()}] ${opts.message || ''}`
      }
    })
  ],
});

export default logger;
