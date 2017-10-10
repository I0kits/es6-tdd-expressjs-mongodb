import winston from 'winston';
import config from '../config';

const formatter = (opts)=> {
  `${opts.timestamp()} [${opts.level.toUpperCase()}] ${opts.message || ''}`;
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
